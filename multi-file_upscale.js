const { globSync } = require("glob");
const { upscaleAll } = require("pixteroid");

/* only 50 samples taken by slicing */
const imagePaths = globSync("image-samples/**.jpg").slice(0, 50);
const destinationPath = "output-samples";
const level = "level1"; //level1 or level2 or level3 - low to higher level
const batchSize = 2; //This is optional parameter def=2

upscaleAll(imagePaths, destinationPath, level, batchSize)
  .then(() => {
    console.log("done");
  })
  .catch((err) => {
    console.log(err);
  });
