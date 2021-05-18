class Game {
///you could TRY doing a constructor of a new pet ....  
///constructor(pet){
//   this.pet = new Pet()
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
      
      }
      
   
     
   
      displayStats = () => {
      const statsCard = document.getElementById("statsCard")
        let name = document.createElement("P") 
         name.setAttribute('id', 'nameField')
         //  name.innerHTML = `My name is: ${petInfo.name}`  ///where does it get this info in Battle Ships?  From the DB / array.  For all these stats it would mae sense to fetch from a db.
        let weight = document.createElement("P")
         //  weight.innerHTML = `I weigh ${petInfo.weight}`  /// innerHTML of P should be "weight + {function that determines weight}"
          weight.setAttribute('id', 'weightField')
       let happiness = document.createElement("P")
         //  happiness.innerHTML= `My happiness level is ${petInfo.happiness}`
          happiness.setAttribute('id', 'happinessField')
       let age = document.createElement("P")
         age.innerHTML = `I am ${newPet.age} months old.`
         age.setAttribute('id', 'ageField')
          statsCard.appendChild(name);
          statsCard.appendChild(weight);
          statsCard.appendChild(happiness);
          statsCard.appendChild(age);
      }
      
      
      createButtons = () =>  {
        const pupCard = document.getElementById("pupCard")
        const main = document.getElementById("main")
        const br = document.createElement("BR");
        
        pupCard.appendChild(br)
         ///create   feed button
           let feedButton = document.createElement('button');
           feedButton.setAttribute("class", "btn btn-primary")
           feedButton.innerHTML = "FEED ME";
           feedButton.addEventListener('click', newPet.onFeedClick);
           pupCard.appendChild(feedButton);
        ///create   play button
           let playButton = document.createElement("button");
           playButton.setAttribute("class", "btn btn-success")
           playButton.innerHTML = "Play With Me!"
           playButton.addEventListener('click', newPet.onPlayClick);
           pupCard.appendChild(playButton);
        ///create   exercise button
           let exerciseButton = document.createElement("button") 
           exerciseButton.setAttribute("class", "btn btn-danger")
           exerciseButton.innerHTML = "Make Me Exercise :("
           exerciseButton.addEventListener('click', newPet.onExerciseClick);
           pupCard.appendChild(exerciseButton);
        //create save button  (save button can be the thing that fetches)
           let saveButton = document.createElement("button")
           saveButton.setAttribute("class", "btn btn-dark")
           saveButton.innerHTML = "Save Your Pom"
           saveButton.addEventListener('click', newPet.onSaveClick); //save click is going to do a fetch request.  //this line is causing the statsbox to disappear?
           
           main.appendChild(saveButton)
       
       }
   
       
  
   
     
   
      //  onSaveClick = () => {

      //    console.log("saving")
      //    let configObj = {
      //     method: "PATCH",
      //     headers:  {
      //       "Content-Type": "application/json",
      //       "Accept": "application/json"
      //     },
      //     // body: JSON.stringify(newPet)
      //     body: JSON.stringify( { pet: newPet } )   
      //   };

      //   fetch(`http://localhost:3000/api/v1/pets/${newPet.id}`, configObj)
      //   .then(r => r.json())
      //   .then(json => {
      //     console.log(json)
      //   })
      //  }
  } 




