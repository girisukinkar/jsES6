// Promises if you can't complete your promise you shall not do anythiing else
//Using async await is much better than callbacks and .then functions
function makeLunch() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(console.log("Dosas for Lunch"));
    }, 3000);
  });
}

function makeDinner() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(console.log("Paneer and Mango for dinner"));
    }, 2000);
  });
}

async function cookMeal() {
  const lunch = await makeLunch(); //Await keyword works only when it receives a promise  otherwise next block of code below starts executing
  console.log("Lunch started" + lunch);
  const dinner = await makeDinner();
  console.log("Dinner Started");
}

cookMeal();
