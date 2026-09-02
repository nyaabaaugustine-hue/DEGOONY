const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const dir = path.resolve(__dirname, "public/assets");

const jobs = [
  { src: "CYBER.jpeg", out: "CYBER.webp", w: 480, q: 78 },
  { src: "A1.jpeg", out: "A1.webp", w: 1600, q: 78 },
  { src: "leadership-bg.jpg", out: "leadership-bg.webp", w: 1400, q: 55 },
  { src: "mobility-team-bg.jpg", out: "mobility-team-bg.webp", w: 1400, q: 55 },
  { src: "banner-herobg.jpg", out: "banner-herobg.webp", w: 1920, q: 78 },
  { src: "banner-01.jpg", out: "banner-01.webp", w: 1400, q: 78 },
  { src: "banner-maxima.jpg", out: "banner-maxima.webp", w: 1200, q: 78 },
  { src: "banner-chatgpt.jpg", out: "banner-chatgpt.webp", w: 1200, q: 70 },
  { src: "banner-ghana.jpg", out: "banner-ghana.webp", w: 1200, q: 78 },
  { src: "evergreen.webp", out: "evergreen-opt.webp", w: 1100, q: 70 },
  { src: "contact-hero.webp", out: "contact-hero-opt.webp", w: 1400, q: 70 },
  { src: "vvvvv.webp", out: "vvvvv-opt.webp", w: 800, q: 70 },
];
const pngJobs = [
  { src: "logo-256.png", w: 256, q: 82 },
];

(async () => {
  for (const j of jobs) {
    const inp = path.join(dir, j.src);
    const outp = path.join(dir, j.out);
    if (!fs.existsSync(inp)) {
      console.log("SKIP (missing) " + j.src);
      continue;
    }
    const before = fs.statSync(inp).size;
    try {
      let pipe = sharp(inp, { failOn: "error" });
      const meta = await pipe.metadata();
      if (j.w && (meta.width || 0) > j.w) pipe = pipe.resize({ width: j.w, withoutEnlargement: true });
      await pipe.webp({ quality: j.q, effort: 6 }).toFile(outp);
      const after = fs.statSync(outp).size;
      console.log(
        `${j.src.padEnd(22)} ${(before/1024).toFixed(1).padStart(7)}KB -> ${(after/1024).toFixed(1).padStart(6)}KB  (${(100-after/before*100).toFixed(0)}% smaller)  [${meta.width}x${meta.height}]`
      );
    } catch (e) {
      console.log("ERR " + j.src + " -> " + e.message);
    }
  }
  for (const j of pngJobs) {
    const inp = path.join(dir, j.src);
    if (!fs.existsSync(inp)) { console.log("SKIP (missing) " + j.src); continue; }
    const before = fs.statSync(inp).size;
    try {
      let pipe = sharp(inp, { failOn: "error" });
      const meta = await pipe.metadata();
      if ((meta.width || 0) > j.w) pipe = pipe.resize({ width: j.w, withoutEnlargement: true });
      const tmp = inp + ".tmp.png";
      await pipe.png({ compressionLevel: 9, palette: true, quality: j.q }).toFile(tmp);
      const after = fs.statSync(tmp).size;
      fs.renameSync(tmp, inp);
      console.log(`${j.src.padEnd(22)} ${(before/1024).toFixed(1).padStart(7)}KB -> ${(after/1024).toFixed(1).padStart(6)}KB  (${(100-after/before*100).toFixed(0)}% smaller)  [${meta.width}x${meta.height}]`);
    } catch (e) { console.log("ERR " + j.src + " -> " + e.message); }
  }
})();