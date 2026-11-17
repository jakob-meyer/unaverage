// Local cutout with Apple Vision (macOS 14+): foreground mask, output PNG with alpha.
// Usage: swift cutout.swift input.(png|jpg) output.png  (faster: compile once with swiftc -O cutout.swift -o ~/.unaverage/cutout)
import Foundation
import Vision
import CoreImage
import CoreImage.CIFilterBuiltins
import ImageIO
import UniformTypeIdentifiers

let args = CommandLine.arguments
guard args.count == 3 else { print("Usage: swift cutout.swift input output.png"); exit(1) }
let inURL = URL(fileURLWithPath: args[1]), outURL = URL(fileURLWithPath: args[2])
guard let ciIn = CIImage(contentsOf: inURL) else { print("Image not readable"); exit(1) }
let req = VNGenerateForegroundInstanceMaskRequest()
let handler = VNImageRequestHandler(ciImage: ciIn)
do { try handler.perform([req]) } catch { print("Vision error: \(error)"); exit(1) }
guard let obs = req.results?.first else { print("No foreground detected"); exit(2) }
print("Instances detected: \(obs.allInstances.count)")
let maskBuffer = try obs.generateScaledMaskForImage(forInstances: obs.allInstances, from: handler)
let mask = CIImage(cvPixelBuffer: maskBuffer)
let blend = CIFilter.blendWithMask()
blend.inputImage = ciIn
blend.backgroundImage = CIImage.empty()
blend.maskImage = mask
let ctx = CIContext()
guard let out = blend.outputImage, let cg = ctx.createCGImage(out, from: ciIn.extent) else { print("Output failed"); exit(1) }
let dest = CGImageDestinationCreateWithURL(outURL as CFURL, UTType.png.identifier as CFString, 1, nil)!
CGImageDestinationAddImage(dest, cg, nil)
CGImageDestinationFinalize(dest)
print("Written: \(outURL.path) \(cg.width)x\(cg.height)")
