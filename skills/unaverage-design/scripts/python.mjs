// Finds a Python 3 command for scripts that start Python (generic-check.mjs runs pixels.py).
// Order: environment variable PY (may carry arguments, for example "py -3"), the venv ~/.unaverage/venv from the
// install fallback in references/dialogue.md 7.1, then python3, python, py -3.
// A candidate counts only if "--version" prints Python 3, because on Windows python3 can open a store placeholder.
// Among the Python 3 commands the first one with pillow and numpy wins; if none has them, the first Python 3 is
// returned with modules: false, so the caller can report the missing modules. Returns { cmd, args, label, modules }
// or null; the caller reports a missing Python, it never fails silently.
import { spawnSync } from 'node:child_process';
import os from 'node:os';
import path from 'node:path';

const VENV = process.platform === 'win32'
  ? path.join(os.homedir(), '.unaverage', 'venv', 'Scripts', 'python.exe')
  : path.join(os.homedir(), '.unaverage', 'venv', 'bin', 'python');
const CANDIDATES = [VENV, 'python3', 'python', 'py -3'];

function split(label) {
  // the venv path may contain spaces; it is a single command without arguments
  if (label === VENV) return [VENV];
  return label.trim().split(/\s+/);
}

function run(cmd, args) {
  return spawnSync(cmd, args, { encoding: 'utf8', timeout: 15000 });
}

export function findPython() {
  let first = null;
  for (const label of [process.env.PY, ...CANDIDATES].filter(Boolean)) {
    const [cmd, ...args] = split(label);
    const v = run(cmd, [...args, '--version']);
    if (v.error || v.status !== 0) continue;
    if (!/^Python 3\./m.test(`${v.stdout || ''}\n${v.stderr || ''}`.trim())) continue;
    const m = run(cmd, [...args, '-c', 'import PIL, numpy']);
    const found = { cmd, args, label, modules: !m.error && m.status === 0 };
    if (found.modules) return found;
    if (!first) first = found;
  }
  return first;
}
