
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




function makeCards() {
let img = document.createElement("img");
  img.src = './assets/pom.jpg'
const main = document.getElementById("main")
const pupCard = document.createElement("DIV");
  pupCard.setAttribute("class", "card")
  pupCard.setAttribute("id", "pupCard")
const statsCard = document.createElement("DIV")
  statsCard.setAttribute("class", "card")
  statsCard.setAttribute("id", "statsCard")
main.appendChild(statsCard)
main.appendChild(pupCard)
pupCard.appendChild(img)
  createButtons()
  displayStats()

}

function displayStats(){
const statsCard = document.getElementById("statsCard")
  let name = document.createElement("P") /// innerHTML of P should be "weight + {function that determines weight}"
    name.innerHTML = "My name is:"
  let weight = document.createElement("P")
    weight.innerHTML = "I weigh..."
  let happiness = document.createElement("P")
    happiness.innerHTML= "My happiness level is:"
    statsCard.appendChild(name);
    statsCard.appendChild(weight);
    statsCard.appendChild(happiness);
}


function createButtons() {
  const pupCard = document.getElementById("pupCard")
  let btn = document.createElement("BUTTON");
  btn.innerHTML = "Feed me!"
  btn.setAttribute("class", "btn btn-primary")
  pupCard.appendChild(btn);
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

makeCards()



});  ///domcontentloaded close
