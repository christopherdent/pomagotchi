// window.addEventListener('DOMContentLoaded', (event) => {

// const newClient = new Client()

// newClient.makeCards()
// newClient.displayStats()
// newClient.createButtons()



// });



    petInfo = {
     name: '',
     weight: '',
     happiness: ''
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
   
   
   const createButtons = () =>  {
     const pupCard = document.getElementById("pupCard")
     const br = document.createElement("BR");
     pupCard.appendChild(br)
   
    //  let feedButton = document.createElement('button')
    //  feedButton.innerHTML = "Feed me!!"
    //  feedButton.setAttribute("class", "btn btn-primary")
    // feedButton.setAttribute("id", 'feed')
      
    //  feedButton.addEventListener("click", function () {
    //     alert('click');
    // });

    //  pupCard.appendChild(feedButton);

     window.onload = function (){
           ///create and attribute feed button
        let feedButton = document.createElement('button');
        feedButton.setAttribute("class", "btn btn-primary")
        feedButton.innerHTML = "FEED ME";
        feedButton.addEventListener('click', onFeedClick);
        pupCard.appendChild(feedButton);


          function onFeedClick(){
            console.log("feeding ");
        }
  ///create and attribute play button
        let playButton = document.createElement("button");
        playButton.setAttribute("class", "btn btn-success")

        playButton.innerHTML = "Play With Me!"
        playButton.addEventListener('click', onPlayClick);
        pupCard.appendChild(playButton);
        // pupCard.innerHTML += '  ';

        function onPlayClick(){
            console.log("playing ");
        }
        

        ///create and attribute exercise button
        let exerciseButton = document.createElement("button") 
        exerciseButton.setAttribute("class", "btn btn-danger")
        exerciseButton.innerHTML = "Make Me Exercise :("
        exerciseButton.addEventListener('click', onExerciseClick);
        pupCard.appendChild(exerciseButton);
        function onExerciseClick(){
            console.log("exercising ");
        }
        


    }


   }

   const tryme = () =>{
        
       console.log('do i fcking work now')
   }
   
    
   
   
   
   const mouseDown = () => {
     document.getElementById("feed").innerHTML = "The mouse button is held down.";
   }
    
     
window.addEventListener('DOMContentLoaded', (event) => {
      makeCards()
    //   displayStats()
    //   createButtons()
    }
)