class Client {


 petInfo = {
  name: '',
  weight: '',
  happiness: ''
}


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
    // createButtons()
    // displayStats()
}

displayStats = () => {
const statsCard = document.getElementById("statsCard")
  let name = document.createElement("P") /// innerHTML of P should be "weight + {function that determines weight}"
    name.innerHTML = `My name is: ${this.petInfo.name}`
  let weight = document.createElement("P")
    weight.innerHTML = `I weigh ${this.petInfo.weight}`
  let happiness = document.createElement("P")
    happiness.innerHTML= `My happiness level is ${this.petInfo.happiness}`
    statsCard.appendChild(name);
    statsCard.appendChild(weight);
    statsCard.appendChild(happiness);
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
    feedButton.addEventListener("click", Actions.clickFeedButton);
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


  //
  // function checkAndUpdatePetInfoInHtml() {
  //   //click buttons
  // }

}



  ///domcontentloaded close
