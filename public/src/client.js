
// bitly.com/tf-vr-pet-starter
// bitly.com/tf-vr-pet-solution

// function checkWeight () {
//   const petWeight = 22
//   if (petWeight > 20) {
//     console.log("you have an obese pet")
//   } else {
//     concole.log("Pet is healthy")
//   }
// }

window.addEventListener('DOMContentLoaded', (event) => {


const card = document.getElementById("card");


function displayStats(){
  let name = document.createElement("P") /// innerHTML of P should be "weight + {function that determines weight}"
  let weight = document.createElement("P")
  let happiness = document.createElement("P")
}


function createButtons() {

  let btn = document.createElement("BUTTON");
  btn.innerHTML = "Feed me!"
  card.appendChild(btn);
}



function petInfo(){
  const petInfo = {
    name: "Chilito",
    weight: "22",
    happiness: "0"
  }
}

console.log("do i work")

function checkAndUpdatePetInfoInHtml() {
//click buttons
}

function clickedTreatButton(){
  petInfo['happiness'] += 1
  petInfo['weight'] += 1
}


function clickedPlayButton(){
  petInfo['happiness'] += 1
  petInfo['weight'] -= 1
}

function clickedExerciseButton() {
    petInfo['weight'] -= 1
    petInfo['happiness'] -= 1
  checkAndUpdatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpddating() {
  if (petInfo['weight'] < 1) {
  petInfo['weight'] = 0
  }
}
createButtons()

});
