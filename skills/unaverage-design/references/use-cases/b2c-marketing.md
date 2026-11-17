# B2C marketing

As of 2026-10-10. Profiles follow the schema in [README.md](README.md) 1; case matrix and R0 in [README.md](README.md) 2, gates in 4, render paths in 5, test plan in 6. Evidence strength: high, medium (also a measured reference), H (derivation, to be tested); sources [n] at the end. Starter sets are defaults; the ranking decides ([directions/README.md](../directions/README.md) 11).

**Cases:** Case B1 (B2C version), Case B5, Case E1 (B2C version), Case E3, Case F1, Case F3, Case F4, Case X1, Case X2. B2B versions of Case B1 and Case E1 in [b2b-marketing.md](b2b-marketing.md).

## Group rules

1. **Brand early, product in the scene, built for sound off.** Logo in the first 2 seconds: up to 5 times the ROI; product in the first 2 seconds: 2.3 times; product in a life situation: plus 26%; designed for sound off: 4.8 times (medium [1]); ABCD grid: attention, brand, connection, direction (medium [2]).
2. **Real variety instead of color variants:** 3 to 5 clearly different concepts per ad group (high [3]); variants differ in message, motif or angle. Test plan as mandatory output following [README.md](README.md) 6; reviewer judgments do not replace a market test.
3. **Loud in material, quiet in the frame:** three of four loud B2C brands stay under 10% saturated pixels in the first screen, the brand-defining display typeface carries 4 to 12% of the text, no decorative gradients, glows or glass (medium, Reference: Oatly, Reference: Duolingo, Reference: Liquid Death). Saturation strategy (G4) usually B, with one color carrier from product, label or campaign.
4. **Platform-native as soon as people are on camera** ([directions/README.md](../directions/README.md) 2.2): real people with consent, the offer in the first 3 seconds, text only in the safe area, no generated people.
5. **Anti-dull:** every direction names one surprising element and one feeling. Neutrality costs growth: with the same extra share of voice, 0.1 instead of 1.3 points of market share per year (medium [4]).
6. **Series before single piece:** the first post or ad of a brand without a series kit runs at least as Standard and sets constant and variable (character, situation, form, blueprint); further pieces are made in Quick within the kit (H). Campaigns with a brand character more often show very large profit effects (34.1 against 26.2%, medium [5]).
7. **Law and access:** when consumers conclude contracts online (shop, subscription, account), check the triggers for consumer contracts online: accessibility law (for the whole flow including sign-up and payment, plus an accessibility statement), price display, order and cancellation buttons, environmental claims, ad labeling where the market requires them. Checklist in [compliance.md](../compliance.md) 3, placeholders and the two views in [compliance.md](../compliance.md) 2; EU and DACH: [markets/eu-dach-compliance.md](../markets/eu-dach-compliance.md) 2 to 6. Open `[REQUIRED: ...]` points stand in the review view, never large in the image. Mandatory notices appear only when their trigger is in the medium (unit price and tax note only next to a price; [SKILL.md](../../SKILL.md) stage 4, point 6).
8. **A launch without product photos is the norm:** a best-form stand-in plus an asset request ([images-and-assets.md](../images-and-assets.md) 5) that shows the claim of the surface: the product as an illustration from its description in the situation it is made for, free photos of an ingredient, place, moment or problem, packaging as an illustration. A topic photo without a claim is no stand-in; if none shows the claim, the motif gets a final-form slot. Never paint or composite the product into a foreign photo; then illustration as a whole or a final-form slot. The product is recognizable as what it is: color, form and setting of the illustration fit the product, and the core property from the brief stands in the headline or anchor, not only in small print. The same illustration appears at most twice in full form per series, otherwise as a crop or detail. A typographic anchor accompanies; on the product post it never carries alone. **Where to buy, price and timing are never missing:** the known part carries, open items appear in final form ([SKILL.md](../../SKILL.md) stage 4, point 6): the slot looks like the filled content (list, card or field with a short field label in the typography of the surface), never a "to be added" label, dashed box, square bracket or underscore; none on stage surfaces (opener of a series, product post, hero), at most one per surface and three per series, everything else in the review view and the wrap-up; ask in the kickoff; never leave it out. The where-to-buy surface (shop, retailers, locations, date) shows how to get it instead of stalling ("more soon"). Never a post with a placeholder as the anchor.
9. **Feeling before category:** the headline hits the feeling or ritual of the audience in their words, not the product category or the news value; on its own in the feed it is understood positively. Outsourcing ("link in bio", "more on the website") adds to a surface and never replaces its content: a surface about places, prices or dates shows them in final form (SKILL.md stage 4, point 6). Illustration only with its own handwriting from the project world; flat stock vector style is generic. Copy pass: [copy.md](../copy.md) 1; German examples: [markets/german.md](../markets/german.md) 2.

## Case B1 Landing page B2C and D2C shop

Who: B2C high, S high (D2C). Register Persuade. Top 12, rank 5 (B2C version). Evidence: Reference: Graza, Reference: Glossier, Reference: On, Reference: Aesop.

- **Specs:** responsive following [README.md](README.md) 4.2 (check widths 320 to 1440 px, core content within two screen heights, LCP under 2.5 s); floating elements (chat, cookie, cart) cover no text. Shop: product images with zoom and sufficient resolution (56% start on the product page with the images, 25% of shops offer too little resolution or zoom, medium [6]); product page following Case B5, checkout following Case C8 ([product-design.md](product-design.md)); total price, unit price where the market requires it, and shipping next to the price (EU: [markets/eu-dach-compliance.md](../markets/eu-dach-compliance.md) 5).
- **Minimum type size:** web gate: reading text 16 px; price, unit price, shipping and mandatory notices 12 px; a function layer without must-read content from 11 px at 4.5:1; input fields on mobile 16 px.
- **Situation:** mobile, coming from Instagram or an ad, thumb, little patience; the product must become imaginable in the hand (H).
- **Success:** product and offer understood in 10 seconds; purchase or sign-up; brand recognizable with the logo covered.
- **AI failure modes:** centered headline on a pastel gradient with a pill button (tell D1, C1); product cards with 16 px radius, shadow, stars and a discount badge (tell C6, V6); icon row in circles ("vegan", "cruelty-free"; tell C8, and check environmental claims); natural tones not tied to material or product (tell V11); Playfair plus Inter (tell A1); D2C builder kit of colored category tiles with pill labels and pill outline buttons on photos (no tool signal, visual check).
- **Pros:** hero with 88 to 100% image area, 0 to 1 button, 6 to 39 words (medium, cluster D2C); serial packshots following a spec with a visible product feature ([images-and-assets.md](../images-and-assets.md) 3.4); color from product, packaging and campaign, the interface almost colorless; on mobile its own motif instead of a crop (G11); exactly one grid break per page.
- **Directions:** home WRM, DRW, MAX. Starter set (R0 WRM, D2C builder kit): near WRM (real people) or DRW (a character of its own); edge STI, RUL, ONE, PRO, EDI or RAW; bold MAX (lead color from the label, principle from Reference: Graza), also TYP (fit 2). Premium D2C (R0 STI): STI only with an object in photo quality. No exclusion.
- **Assets:** required: packshots and the product in use, people with consent, real prices. Substitute: request a packshot spec and the phone photo guide ([images-and-assets.md](../images-and-assets.md) 3.4, 3.2); without photos, stand-ins following group rule 8 (example Röstwerk: the bag with a roast-level scale as an illustration from its description instead of a packshot, a free photo of freshly roasted beans on the cooling tray); open prices in final form in place (group rule 8), never as a label, underscore or bracket, never as the main figure, tracked in the review view.
- **Output:** HTML, mobile version 390 x 844 as its own design; R-Web.
- **Check:** 10-second test on mobile (R2); image area and words in the first screen against the direction's corridor; D2C builder kit by eye; zoom and resolution of the product images; price display and order flow following group rule 7.

## Case B5 Marketplace listing and shop product page

Who: B2C very high (D2C, consumer goods), S medium. Register Persuade under platform rules. Evidence: rule-based.

- **Specs Amazon** (medium, secondary sources, Seller Central only with login [7][8]): main image on pure white RGB 255, 255, 255; the product fills at least 85%; only the product sold, without text, logo, watermark and props; longest side from 1000 px for zoom, target 2000 px (H); JPEG, PNG, TIFF. Additional images may carry text and graphics. A+ standard module 970 x 600 px, comparison table 300 x 300 px; Premium A+ 1464 x 600 px desktop, 600 x 450 px mobile.
- **Specs Shopify** (high [9]): up to 5000 x 5000 px or 25 MP, under 20 MB; square 2048 x 2048 px usually displays best; all main images in the same aspect ratio.
- **Image sequence** (medium [6]): 56% explore the images first; at least one image showing scale (42% read the size from images, 28% of shops offer none); key features with explanatory text in the image (missing at 52%). Law: strikethrough prices only as the market's price rules allow (EU: [markets/eu-dach-compliance.md](../markets/eu-dach-compliance.md) 5); environmental and health claims following [compliance.md](../compliance.md) 3 (EU and DACH: [markets/eu-dach-compliance.md](../markets/eu-dach-compliance.md) 6 and 11).
- **Minimum type size:** shop page: web gate. Text in A+ images 22 px at 970 px width (social gate converted), target 32 px, because Amazon shrinks to about 375 px on mobile (H).
- **Situation:** search and comparison on the phone, the thumb swipes through the images, a few seconds per listing (H).
- **Success:** size, material, contents and benefit readable from the images; the images pass the platform check on the first upload.
- **AI failure modes:** generated lifestyle scenes with wrong product details (G7); icon infographic with six check marks (tell C8, C10); invented "bestseller" badges or ratings (tell E5, V6); text on the main image (platform violation); stock models (tell V8); gradient background (tell C1).
- **Pros:** image sequence as a chain of arguments: main image, scale, material in detail, use, contents, comparison; text in the image as a fact with a reference ("fits in an A5 bag"); A+ as a brand chapter instead of repeating the bullet points; everything checked at phone size first.
- **Directions:** home STI, WRM. Starter set (R0 WRM, D2C builder kit): near WRM in best form with an asset of its own (real use, scale); edge STI (the packshot discipline of the main image carried on), also EDI or HER (fit 2); bold MAX. Premium D2C (R0 STI): near STI, HER or EDI, edge WRM, bold MAX. No exclusion.
- **Assets:** cutout packshots, detail photos, use photos with consent, dimensions, contents. Substitute: your own phone photos following an image brief, kitchen-table packshot with `scripts/cutout.swift` ([images-and-assets.md](../images-and-assets.md) 3.4); never generated product views as the real product, never stand-ins in the listing.
- **Output:** JPG or PNG per slot at exact sizes (R-Raster with file check); shop page as HTML or theme section (R-Web). The brand's own shop: group rule 7.
- **Check:** main image white 255 (`pixels.py palette`) and fill 85%; sizes per slot; image text readable in the 375 px view; scale image present; no invented seals, ratings or badges.

## Case E1 Social post B2C

Who: B2C high, S high. Register Feed. Top 12, rank 1 (B2C version). Evidence: Reference: Shot on iPhone, Reference: Spotify Wrapped, Reference: Oatly.

- **Specs:** Instagram feed 1080 x 1350 (4:5), allowed 1.91:1 to 4:5 (medium [11]); profile grid in a 3:4 crop since 2025 (medium [12]); safe area 1012 x 1080 (x 34 to 1046, y 135 to 1215); sRGB.
- **Minimum type size:** social gate 24 px at 1080 px width, for a second reading level below that the status is only yellow, not red; target 30 px; level-1 element 15 to 25% of the height; at most about 12 words in the image.
- **Situation:** scrolling on the phone, sound off, image about 360 px wide; the profile grid works as the overall picture of the brand.
- **Success:** the thumb stops, message in about 2 seconds, brand recognizable; saves and shares; the grid reads as a series.
- **AI failure modes:** pastel, confetti, violet-pink gradient, everything equally loud (tell B1, C1, V10); stock people (tell V8); quote card without an image (tell V21); emoji as design (tell C9); text in the grid crop; a topic photo of the category instead of an image that proves the claim; a pun that says the negative first in the feed; all posts of the series on the same ground and in the same color; the same illustration in every post; a product that reads as something else because the core property is only in small print; a where-to-buy surface that stalls or shows "to be added" labels (tell E6); a mandatory line without its trigger (unit price in a post without a price).
- **Pros:** exactly one dominant element, secondary elements at least a factor of 3 to 4 smaller; loud through size, tone and contrast to the platform ground instead of saturation (5 of 6 award-winning social works under 13% saturated pixels, medium); a series of constant and variable, the posts change ground or light and dark ([craft.md](../craft.md) 5.5), also in calm directions; text in a band or field instead of over the main photo (Reference: Shot on iPhone, Outdoor Grand Prix 2015, medium [13]); one tangible idea from the product's world carries the series, one concrete moment runs as a through-line through all posts; the product post shows the product in the situation it is made for (group rule 8); the headline names benefit and feeling and reads positively on its own, because only the headline is read in the feed; the product's core property from the brief stands in the headline or anchor of the product post (group rule 8); at launch, where to buy, price and timing appear in the series, the where-to-buy surface shows how to get it, open items in final form (group rule 8).
- **Directions:** home WRM, ONE, MAX, TYP. Starter set (R0 WRM, pastel): near WRM (real people in an everyday scene); edge ONE (punchline from the product); bold TYP or MAX. No exclusion.
- **Assets:** key message, the brand's own photos (product, people with consent, places), brand colors; at launch where to buy, price and timing (ask in the kickoff). Substitute: a stand-in following group rule 8 that shows the claim, or an object anchor; type accompanies and never carries the product post alone; no generated people, stock faces only as mood.
- **Output:** PNG 1080 x 1350 from HTML, alt text proposal, test plan; R-Raster.
- **Check:** safe-area overlay; contact sheet in the 3:4 grid together with the last eight posts (change of ground or light and dark visible, no image more than twice, at most three open items in final form); thumb view 360 px; saturated pixels against the declared strategy (G4).

## Case E3 TikTok and Reel cover

Who: B2C high, S and B2B medium. Register Feed, platform-native mode. Evidence: rule-based.

- **Specs:** 9:16, 1080 x 1920; the TikTok profile grid shows a 3:4 center crop (y 240 to 1680) with the view count bottom left (H from a secondary source [14]); the Instagram Reels grid is also 3:4 [12]; conservative core 950 x 979 (x 65 to 1015, y 269 to 1248) plus about 120 px free on the right (H, check against the official template in the ad account); in-feed ads from 540 x 960, safe zone depending on format, caption length and add-ons (high [15]).
- **Minimum type size:** social gate; title 2 to 4 words with a cap height of 4 to 7% of the image height (77 to 134 px), subtitle about 2% (about 38 px) (H, calibrate on real placements).
- **Situation:** the profile grid is seen as a series; the cover decides which video gets opened.
- **Success:** the grid reads as a series; the topic of each video at a glance.
- **AI failure modes:** title at the top or bottom in the crop; small type; a random still without contrast; glitch or outline type (tell V10, AI trap TYP).
- **Pros:** the cover as its own design instead of an arbitrary frame; a fixed type position in the core 1080 x 1440; a face or object large; series color or series form; grid preview before posting.
- **Directions:** home MAX, TYP. Starter set (R0 MAX): near TYP or MAX in best form; edge ONE, EDI (photo with band) or DRW; bold RUL (series form) or WRM (real person). Excluded ORD. Motion (M-MOT) in the video through a video skill.
- **Assets:** still or photo, title. Substitute: an object or situation from the video as the cover motif; title and series color accompany.
- **Output:** PNG or JPG 1080 x 1920, test plan; video to a video skill; R-Raster.
- **Check:** contact sheet of the covers in the 3:4 crop; zone overlay; readability at 120 px tile width (H).

## Case F1 Meta ad (Feed, Stories, Reels, Carousel)

Who: B2C very high, S and B2B medium. Register Feed, platform-native mode as soon as people are on camera. Top 12, rank 3 (B2C version). Evidence: rule-based.

- **Specs** (high [16]): feed 4:5, recommended 1440 x 1800 (Facebook min. 600 x 750, Instagram min. 500 wide, tolerance 3%), up to 30 MB; primary text Facebook 50 to 150, Instagram 125 characters; headline 27 or 40 characters respectively. Stories and Reels 9:16, 1440 x 2560, free: 14% at the top, 35% at the bottom, 6% on each side. Carousel 2 to 10 cards, min. 1080 x 1080, image 4:5. All formats from one source.
- **Minimum type size:** social gate, so 32 px at 1440 px width; at most 12 words in the first frame.
- **Situation:** feed, Stories, Reels; sound mostly off; elements that look like advertising are overlooked (medium [17]).
- **Success:** attention in the first seconds, brand recognizable early, works without sound; cost per result in the test.
- **AI failure modes:** color variants of the same motif as "variants"; text in the safe zones; a slick glossy look without people; stock photo (tell V8); glass card (tell C4).
- **Pros:** concept matrix of message times motif times format; 3 to 5 truly different concepts; product in use, people, the brand in the image rather than only in the sender line; modular templates 4:5, 9:16 and 1:1 from one source; safe-zone overlay; every concept with one tangible idea from the product's world, the image proves the variant's message instead of only the category; the headline names the benefit and reads positively on its own; at launch, timing and where to buy in the image or primary text, prices following group rule 7.
- **Directions:** home WRM. Starter set (R0 WRM, stock people): near WRM (real people, required in platform-native mode); edge ONE, RUL, PRO, EDI or RAW (category break only with the user's consent); bold TYP or MAX. Excluded ORD.
- **Assets:** required: product photos, people with consent ([compliance.md](../compliance.md) 3; EU and DACH: [markets/eu-dach-compliance.md](../markets/eu-dach-compliance.md) 9), logo, offer. Substitute: without people no platform-native mode; then ONE, TYP or MAX with a product object (without a photo as a drawing, group rule 8).
- **Output:** PNG or JPG per format, test plan; moving image to a video skill; R-Raster.
- **Check:** overlay 14, 35, 6%; contact sheet of all variants (real concepts or only colors?); logo or product in the first frame; text lengths; prices and ad labeling following group rule 7.

## Case F3 Display ad (Google, programmatic)

Who: B2C medium, B2B low. Register Persuade. Evidence: rule-based.

- **Specs:** uploaded image ads up to 150 KB, including 300 x 250, 336 x 280, 728 x 90, 300 x 600, 160 x 600, 320 x 50, 970 x 250 (medium [18]); responsive display 1200 x 628, 1200 x 1200, 900 x 1600, logo 1200 x 1200 and 1200 x 300, without text, logo, button and collage in the image, empty area at most 80%, 5 to 10 images per ratio, up to 5120 KB (high [19]); check the limit for HTML5 ads (150 or 600 KB) in the account (H).
- **Minimum type size:** 12 px at every size; the message in 320 x 50 from about 16 px (H).
- **Situation:** the edge of someone else's page; banners that look like advertising are overlooked (medium [17]).
- **Success:** brand and offer readable at the smallest size; clicks.
- **AI failure modes:** one template scaled to all sizes, text unreadable at 728 x 90 (tell H4); too many elements; file size exceeded; text and buttons in the image of responsive ads.
- **Pros:** compose the format families (landscape, portrait, square, strip) one by one; smallest size first; deliver responsive images without text, text as a separate asset.
- **Directions:** home ONE. Starter set (R0 MAX, ad look): near TYP or MAX in best form; edge ONE; bold ORD or RUL. No exclusion.
- **Assets:** product image as a cutout and in context, logo square and landscape. Substitute: a stand-in following group rule 8 that shows the claim (the product as an illustration from its description in its situation, software as a mockup from the brief); the product name accompanies as type and never carries alone.
- **Output:** PNG or JPG, strongly compressed, HTML5 only when needed, test plan; R-Raster.
- **Check:** file size per file; contact sheet of all sizes at original size; responsive images without text.

## Case F4 YouTube thumbnail

Who: B2C high (creator-like brands), B2B medium (recordings, explainer videos). Register Feed. Evidence: rule-based.

- **Specs** (high [20][21]): 16:9, recommended 3840 x 2160, at least 640 wide; Shorts 2160 x 3840; JPG or PNG, 2 MB mobile, 50 MB desktop; A/B test with up to 3 variants, winner by watch time, not by click-through rate. Bottom right corner free (time display, position H).
- **Minimum type size:** gate: cap height 8% of the image height, because the preview measures about 320 x 180 px (H); 1 to 4 words.
- **Situation:** preview next to competing videos, often small; the promise is checked after the click.
- **Success:** wins the A/B test by watch time; readable at small size.
- **AI failure modes:** clickbait with arrows, circles and glow (tell C3, V2); text over the time display; motif with no connection to the video (tell V1).
- **Pros:** one face or object large; contrast to the platform surface; the promise fits the video, otherwise it loses in the watch-time test; three truly different variants; a series system.
- **Directions:** home ONE. Starter set (R0 MAX, clickbait): near MAX in best form, TYP or RAW; edge ONE, also EDI or DRW (fit 2); bold WRM (real person in a scene). Excluded ORD, STI; B2B recordings therefore go through the series kit from Case H1 (RUL, [b2b-marketing.md](b2b-marketing.md)).
- **Assets:** photo of the person or object, title. Substitute: an object or type cover of the series.
- **Output:** PNG or JPG, three variants with a test plan; R-Raster.
- **Check:** view scaled down to 320 px; three variants in the contact sheet; bottom right corner free.

## Case X1 Campaign microsite and launch experience

Who: B2C medium, S medium (launch), B2B low. Register Persuade. Evidence: Reference: Igloo, Reference: Lusion, Reference: Scout Motors.

- **Specs:** like a website ([README.md](README.md) 4.2); in addition text in the DOM, no loading screen, LCP under 2.5 s, CLS under 0.1 (high [22]); a complete static version with reduced motion; the main action reachable without the experience in a fixed corner ([modules.md](../directions/modules.md) M-SPA). Where to buy, price and timing are never missing in the experience either, open items in final form (group rule 8).
- **Minimum type size:** web gate; a function layer with real data as ornament from 11 px at 4.5:1 (references use 8 to 16 px; do not adopt their sizes below 11 px).
- **Situation:** the visitor comes from the campaign and wants to be entertained; dwell time higher than on a conversion page (H).
- **Success:** talkability (shares, press); the key message also without the experience; main action reachable.
- **AI failure modes:** particles across the whole page, glow blobs, shiny spheres, a loading screen with percent, a cursor effect as the hero (tell C3, C4, D10, V24); text only in the canvas.
- **Pros:** an object of its own or a pictorial name becomes the world (Reference: Igloo, Site of the Year 2024); one breakout instead of twenty (Reference: Lusion); a designed final image instead of a link dump; the product appears in the situation it is made for, software as a mockup from the brief with one running case; the headline names the benefit and reads positively on its own. With award winners, accessibility is the weakest score (6.6 to 7.4, high [23]), so the counter-rules from Specs apply.
- **Directions:** home EDI, ONE, TYP. Starter set (R0 PRO, tech launch with glow): near PRO in best form; edge ONE or EDI; bold TYP. Modules M-SPA (in Quick and Standard only as a static translation, WebGL only in Studio with a fallback) and M-MOT. No exclusion; do not use as a conversion page.
- **Assets:** an object of its own, model, product render or scene. Substitute: a static translation (material photo, oversized chapter word, color change on scroll).
- **Output:** HTML; R-Web plus captures while scrolling.
- **Check:** the first paint shows the key message; reduced motion complete; text in the DOM; contrast over image and video at the least favorable point.

## Case X2 Year in review and share cards

Who: B2C medium (apps with usage data), B2B medium (benchmark and team reviews), S medium. Register Feed. Evidence: Reference: Spotify Wrapped.

- **Specs:** story cards 1080 x 1920, core 950 x 979; every card a finished format for other platforms with logo and URL in the footer (medium, Reference: Spotify Wrapped).
- **Minimum type size:** social gate; a number, list or sentence as the only large element, everything else under a quarter of that size; 4 to 12 words per card (medium, Reference: Spotify Wrapped).
- **Situation:** users see their own data and share it in Stories; a ritual moment in the year.
- **Success:** shares; recognition without a logo; yearly repetition (Wrapped: Cannes Lions Gold 2023, medium [24]).
- **AI failure modes:** purple-pink gradient with a glass card, glow and gradient number (tell B1, C2, C3, C4); top lists as equally sized rows with progress bars (tell V17); every card with a new color and a new image.
- **Pros:** one card, one statement; a fixed blueprint with a changing variable (accent color, pattern, content); the recipient's number large and cropped; recognition through form instead of the house color; dry two-liners.
- **Directions:** home DAT, MAX. Starter set (R0 MAX): near MAX in best form (constant and variable); edge ONE or DRW; bold DAT (objective data card). Excluded ORD, STI.
- **Assets:** required: real usage data with privacy approval. Substitute: a consistent sample data set, recognizable as an example (G7).
- **Output:** PNG per card, HTML template with variables, test plan; R-Raster.
- **Check:** contact sheet with three different data sets (the blueprint holds, the variable changes); safe area; logo and URL in the footer.

## Sources

1. Social Media Today, Meta and Analytic Partners: https://www.socialmediatoday.com/news/Meta-Shares-Key-Video-Ad-Tips/638814/
2. Google Ads, ABCDs of effective video ads: https://support.google.com/google-ads/answer/14783551?hl=en
3. TikTok Ads, Creative Best Practices: https://ads.tiktok.com/help/article/creative-best-practices
4. System1, The Extraordinary Cost of Dull: https://system1group.com/blog/the-extraordinary-cost-of-dull
5. System1 2019, brand characters: https://martechseries.com/analytics/behavioral-marketing/memorable-characters-ads-boost-chances-profit-30-just-4-us-brands-using-says-system1/
6. Baymard, product images: https://baymard.com/blog/in-scale-product-images , https://baymard.com/blog/ensure-sufficient-image-resolution-and-zoom , https://baymard.com/blog/product-images-descriptive-text
7. Amazon image requirements (secondary): https://www.sellersprite.com/en/blog/Amazon-Image-Requirements-Optimization-Tips
8. Amazon A+ and Premium A+ (secondary): https://myamazonguy.com/amazon-premium-a-content-faqs
9. Shopify, Product media types: https://help.shopify.com/en/manual/products/product-media/product-media-types
10. PAngV 2022 (German price indication ordinance): [markets/eu-dach-compliance.md](../markets/eu-dach-compliance.md) 5
11. Instagram Help, photo resolution: https://help.instagram.com/1631821640426723
12. Buffer, Instagram Grid 2025: https://buffer.com/resources/instagram-grid/
13. MacRumors, Shot on iPhone Grand Prix: https://macrumors.com/2015/06/23/apple-wins-grand-prix-shot-on
14. TikTok profile grid (secondary): https://postfa.st/sizes/tiktok/carousel
15. TikTok Ads, Video ads specifications: https://ads.tiktok.com/help/article/video-ads-specifications
16. Meta Ads Guide, Feed, Stories, Carousel: https://www.facebook.com/business/ads-guide/update/image/instagram-feed , https://www.facebook.com/business/ads-guide/update/image/instagram-story , https://www.facebook.com/business/ads-guide/update/carousel/instagram-feed
17. NN/g, Banner Blindness Revisited: https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/
18. Google Ads, Uploaded display ads: https://support.google.com/google-ads/answer/1722096
19. Google Ads, Responsive display ads: https://support.google.com/google-ads/answer/9823397
20. YouTube Help, Thumbnails: https://support.google.com/youtube/answer/72431
21. YouTube Help, A/B testing: https://support.google.com/youtube/answer/16391400
22. web.dev, Web Vitals: https://web.dev/articles/vitals
23. Awwwards, Evaluation: https://www.awwwards.com/about-evaluation/
24. Spotify Newsroom, Cannes Lions 2023: https://newsroom.spotify.com/2023-06-22/spotify-wins-trio-of-awards-at-2023-cannes-lions/
