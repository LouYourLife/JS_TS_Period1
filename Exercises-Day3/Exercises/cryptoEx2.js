const { makeSecureRandom } = require("./cryptoExercise");

function paral() {
  try {
    const p1 = makeSecureRandom(5);
    const p2 = makeSecureRandom(5);
    const p3 = makeSecureRandom(5);
    const p4 = makeSecureRandom(5);
    const p5 = makeSecureRandom(5);

    Promise.all([p1, p2, p3, p4, p5]).then((values) => {
      console.log(values);
    });
  } catch (err) {
    console.log(err);
  }
}

async function sequen() {
  try {
    const p1 = await makeSecureRandom(5);
    const p2 = await makeSecureRandom(5);
    const p3 = await makeSecureRandom(5);
    const p4 = await makeSecureRandom(5);
    const p5 = await makeSecureRandom(5);
    console.log([p1, p2, p3, p4, p5]);
  } catch (err) {
    console.log(err);
  }
}

paral();
sequen();
