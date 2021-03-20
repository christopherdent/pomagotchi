// window.addEventListener('DOMContentLoaded', (event) => {

// const newClient = new Client()

// newClient.makeCards()
// newClient.displayStats()
// newClient.createButtons()



// });


 
let petInfo = {
    "name" : "Doge",
    "weight" : 1,
    "happiness": 0
  }
   
  let input = prompt("Please name your pom", "Chilito"); 
   
  
  const addName = (input) => {
    let name = document.getElementById("nameField");
    name.innerHTML = `My name is ${input}`;
  }



   const makeCards = () => {
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
   
   const displayStats = () => {
   const statsCard = document.getElementById("statsCard")
     let name = document.createElement("P") 
      name.setAttribute('id', 'nameField')
       name.innerHTML = `My name is: ${petInfo.name}`  ///where does it get this info in Battle Ships?  From the DB / array.  For all these stats it would mae sense to fetch from a db.
     let weight = document.createElement("P")
       weight.innerHTML = `I weigh ${petInfo.weight}`  /// innerHTML of P should be "weight + {function that determines weight}"
       weight.setAttribute('id', 'weightField')
       let happiness = document.createElement("P")
       happiness.innerHTML= `My happiness level is ${petInfo.happiness}`
       happiness.setAttribute('id', 'happinessField')
       statsCard.appendChild(name);
       statsCard.appendChild(weight);
       statsCard.appendChild(happiness);
   }
   
   






   const createButtons = () =>  {
     const pupCard = document.getElementById("pupCard")
     const br = document.createElement("BR");
     
     pupCard.appendChild(br)
   
   //  window.onload = function (){
           ///create and attribute feed button
        let feedButton = document.createElement('button');
        feedButton.setAttribute("class", "btn btn-primary")
        feedButton.innerHTML = "FEED ME";
        feedButton.addEventListener('click', onFeedClick);
        pupCard.appendChild(feedButton);




  ///create and attribute play button
        let playButton = document.createElement("button");
        playButton.setAttribute("class", "btn btn-success")
        playButton.innerHTML = "Play With Me!"
        playButton.addEventListener('click', onPlayClick);
        pupCard.appendChild(playButton);
        
 
        
        ///create and attribute exercise button
        let exerciseButton = document.createElement("button") 
        exerciseButton.setAttribute("class", "btn btn-danger")
        exerciseButton.innerHTML = "Make Me Exercise :("
        exerciseButton.addEventListener('click', onExerciseClick);
        pupCard.appendChild(exerciseButton);
               
        
    }
//}


 
    const onFeedClick = () => {
      console.log("feeding ");
      let weight = document.getElementById("weightField");
      let happiness = document.getElementById("happinessField");
      weight.innerHTML = `I weigh ${petInfo['weight'] += 2}`;
      happiness.innerHTML = `My happiness is ${petInfo['happiness'] += 1}`;
    }
   


    const onPlayClick = () => {
      console.log("playing");
      let weight = document.getElementById("weightField");
      let happiness = document.getElementById("happinessField");
      // weight.innerHTML = `I weigh ${petInfo['weight'] += 2}`;  decrement 0 for the first three plays but 1 after that.  how?
      happiness.innerHTML = `My happiness level is ${petInfo['happiness'] += 5}`;
    }




    const onExerciseClick = () => {
      console.log("exercising");
      let weight = document.getElementById("weightField");
      let happiness = document.getElementById("happinessField");
      weight.innerHTML = `I weigh ${petInfo['weight'] -= 1}`;  
      happiness.innerHTML = `My happiness level is ${petInfo['happiness'] -= 10}`;

    }

    
     
window.addEventListener('DOMContentLoaded', (event) => {
      
      makeCards()
      addName(input)
    //   displayStats()
    //   createButtons()
    }
)