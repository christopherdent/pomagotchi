


// let newPet 
// newPet = new Pet()
// window.addEventListener('DOMContentLoaded', (event) => {
//   makeCards()
//   console.log('app is loaded')
//   newPet.getPets()
//   }
// )
 




console.log('app is loaded')
const newGame = new Game()
const newPet= new Pet() 

document.addEventListener('DOMContentLoaded', function() {
  newGame.makeCards()
  newGame.createButtons()
  newGame.displayStats()
  newPet.getPet()

})


 
   