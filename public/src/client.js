
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

  // function petInfo(){
    const petInfo = {
      name: "Chilito",
      weight: "22",
      happiness: "0"
    }
  // }


makeCards = () => {
  let img = document.createElement("IMG");
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

displayStats = () => {
const statsCard = document.getElementById("statsCard")
  let name = document.createElement("P") /// innerHTML of P should be "weight + {function that determines weight}"
    name.innerHTML = `My name is: ${petInfo.name}`
  let weight = document.createElement("P")
    weight.innerHTML = `I weigh ${petInfo.weight}`
  let happiness = document.createElement("P")
    happiness.innerHTML= `My happiness level is ${petInfo.happiness}`
    statsCard.appendChild(name);
    statsCard.appendChild(weight);
    statsCard.appendChild(happiness);
}

clickedFeedButton = () => {

  console.log("Feeding pet")
  petInfo['happiness'] += 1
  petInfo['weight'] += 1
}


createButtons = () =>  {
  const pupCard = document.getElementById("pupCard")
  const br = document.createElement("BR");
  pupCard.appendChild(br)

  let feedButton = document.createElement("BUTTON");
    feedButton.innerHTML = "Feed me!"
    feedButton.setAttribute("class", "btn btn-primary")
    feedButton.id = "feed"

    pupCard.appendChild(feedButton);
    feedButton.addEventListener("click", clickedFeedButton);
    pupCard.innerHTML += '  ';

  let playButton = document.createElement("BUTTON");
    playButton.innerHTML = "Play With Me!"
    playButton.setAttribute("class", "btn btn-success")
    pupCard.appendChild(playButton);
    pupCard.innerHTML += '  ';
  let exerciseButton = document.createElement("BUTTON");
    exerciseButton.innerHTML = "Make me exercise!"
    exerciseButton.setAttribute("class", "btn btn-danger")
    pupCard.appendChild(exerciseButton);



}



function checkAndUpdatePetInfoInHtml() {
//click buttons
}



clickedPlayButton = () => {
  petInfo['happiness'] += 1
  petInfo['weight'] -= 1
}

clickedExerciseButton = () => {
    petInfo['weight'] -= 1
    petInfo['happiness'] -= 1
  checkAndUpdatePetInfoInHtml();
}

checkWeightAndHappinessBeforeUpdating = () => {
  if (petInfo['weight'] < 1) {
  petInfo['weight'] = 0
  }
}

makeCards()



});  ///domcontentloaded close
