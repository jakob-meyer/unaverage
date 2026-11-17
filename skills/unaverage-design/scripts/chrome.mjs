// Finds an installed Chromium browser for puppeteer-core.
// Order: environment variable CHROME_PATH, common install paths, else an error with a hint.
import fs from 'node:fs';

// Windows: machine-wide installs under Program Files (both), per-user installs (no admin rights) under LOCALAPPDATA
const env = process.env;
const winRoots = [env.ProgramFiles || 'C:\\Program Files', env['ProgramFiles(x86)'] || 'C:\\Program Files (x86)', env.LOCALAPPDATA].filter(Boolean);
const winApps = ['Google\\Chrome\\Application\\chrome.exe', 'Microsoft\\Edge\\Application\\msedge.exe', 'BraveSoftware\\Brave-Browser\\Application\\brave.exe', 'Chromium\\Application\\chrome.exe'];

const CANDIDATES = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
  '/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/snap/bin/chromium',
  ...winApps.flatMap(app => winRoots.map(root => `${root}\\${app}`)),
];

export function findChrome() {
  if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) return process.env.CHROME_PATH;
  for (const p of CANDIDATES) if (fs.existsSync(p)) return p;
  throw new Error('No Chrome or Chromium found. Set CHROME_PATH or install Chrome. Without a browser: render the result with the tool available in the environment and look at it.');
}
