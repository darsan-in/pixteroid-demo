const { upscale } = require("pixteroid");
const { join, relative } = require("path");

const imagePath = "image-samples/0200.png";
const outputPath = join("single-output", relative(process.cwd(), imagePath));
const level = "level1"; //level1 or level2 or level3 - low to higher level

upscale(imagePath, outputPath, level)
  .then(() => {
    console.log("done");
  })
  .catch((err) => {
    console.log(err);
  });
