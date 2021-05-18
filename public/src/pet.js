class Pet {

  constructor(id, name, weight, happiness, age){
          this.id = id; 
          this.name = name;
          this.weight = weight;
          this.happiness = happiness;
          this.age = age;
      }
  
  
  
      getPet = () => {
          console.log('fetchin the data')
          let nameField = document.getElementById("nameField")
          let weightField = document.getElementById("weightField")
          let happinessField = document.getElementById("happinessField")
          let ageField = document.getElementById("ageField")
          fetch('http://localhost:3000/api/v1/pets/1')    ///grabbing one pet.  In the future you'll use interpolation to grab the RIGHT pet for the RIGHT owner.  For now we are just grabbing pet 1, calvin.
          .then(response => response.json())
          .then(pet => {
              this.id = pet.id 
              this.name = pet.name;
              this.weight = pet.weight;
              this.happiness = pet.happiness;
              this.age = pet.age; //.to_int? or parseint? 
               
            
            nameField.innerHTML = `My name is: ${this.name}`
            weightField.innerHTML = `I weigh: ${this.weight}`
            happinessField.innerHTML = `My happiness level is: ${this.happiness}`
            ageField.innerHTML = `I am ${this.age} months old. `   ///from here it acurattely reads the age.  ////here you should 
        
            this.ager(pet.age)
          })  
         }
  
  
     onFeedClick = () => {
      console.log("feeding ");
      let weight = document.getElementById("weightField");
      let happiness = document.getElementById("happinessField");
      weight.innerHTML = `I weigh ${this.weight += 2}`;
  
      happiness.innerHTML = `My happiness is ${this.happiness += 1}`;
     
    }
  
  
    onPlayClick = () => {
      console.log("playing");
      let weight = document.getElementById("weightField");
      let happiness = document.getElementById("happinessField");
      // weight.innerHTML = `I weigh ${petInfo['weight'] += 2}`;  decrement 0 for the first three plays but 1 after that.  how?
      happiness.innerHTML = `My happiness level is ${this.happiness += 5}`;
    }
  
  
  
  
     onExerciseClick = () => {                
      console.log("exercising");
      let weight = document.getElementById("weightField");
      let happiness = document.getElementById("happinessField");
      let age = document.getElementById("ageField");
      if (this.weight > 1) {
      weight.innerHTML = `I weigh ${this.weight -= 1}`;  
      } else if (this.age > 6) {
        age.innerHTML = `I am ${this.age -= 1} months old!`
      }
      happiness.innerHTML = `My happiness level is ${this.happiness -= 3}`;
    }
  

   
    ager = (age) => {
        
      let i = age;
      let ageField = document.getElementById("ageField");
      setInterval(function(){
        i++;
        console.log(i)
        ageField.innerHTML = `I am ${this.age = i} months old!`
        this.age = i;
        if(i > 30){
          i = 0;
        }
      },3000);  //60 seoconds.  every 60 seconds the dog gets a month old. 
      return newPet.age = age 
   }
  
      
   onSaveClick = () => {
    newPet.age = age 
    console.log("saving")
    let configObj = {
     method: "PATCH",
     headers:  {
       "Content-Type": "application/json",
       "Accept": "application/json"
     },
     // body: JSON.stringify(newPet)
     body: JSON.stringify( { pet: newPet } )   
   };
   debugger
   
   fetch(`http://localhost:3000/api/v1/pets/${newPet.id}`, configObj)
   .then(r => r.json())
   .then(json => {
     console.log(json)
   })
  }
  
  
  
  
  
  
  }
