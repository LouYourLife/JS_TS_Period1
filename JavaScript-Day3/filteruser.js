const { filterDir, filterDirP, filterDirMyPromise } = require("./filterdir");

// Test code
/* filterDir(__dirname, ".js", (err, files) => {
  if (err) {
    return console.log(err);
  }
  //console.log(files);
}); */

/* filterDirP(__dirname,".js")
.then(files=>console.log(files))
.catch(e=>console.log(e)) */

//Sekventiel skal bruge await
async function testerSec() {
  try {
    const files = await filterDirMyPromise("Folder1", ".js");
    const files2 = await filterDirMyPromise("Folder2", ".js");
    const files3 = await filterDirMyPromise("Folder3", ".js");
    const files4 = await filterDirMyPromise("Folder4", ".js");
    const files5 = await filterDirMyPromise("Folder5", ".js");
    console.log([files, files2, files3, files4, files5]);
  } catch (err) {
    console.log(err);
  }
}

// Parallel bruger Promise.all
function testerPar() {
  try {
    const files = filterDirMyPromise("Folder1", ".js");
    const files2 = filterDirMyPromise("Folder2", ".js");
    const files3 = filterDirMyPromise("Folder3", ".js");
    const files4 = filterDirMyPromise("Folder4", ".js");
    const files5 = filterDirMyPromise("Folder5", ".js");
    Promise.all([files, files2, files3, files4, files5])
    .then((values) => {
      console.log(values);
    });
  } catch (err) {
    console.log(err);
  }
}

testerPar();
testerSec();

/* filterDirMyPromise(__dirname, ".js")
  .then((files) => console.log(files))
  .catch((e) => console.log(e)); */
