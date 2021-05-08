class Pet {

constructor(name, weight, happiness){
        this.name = name;
        this.weight = weight;
        this.happiness = happiness;
        this.age = "";
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
            this.name = pet.name;
            this.weight = pet.weight;
            this.happiness = pet.happiness;
            this.age = pet.age; 

          nameField.innerHTML = `My name is: ${this.name}`
          weightField.innerHTML = `I weigh: ${this.weight}`
          happinessField.innerHTML = `My happiness level is: ${this.happiness}`
       
          ageField.innerHTML = `I am ${this.age} months old`
      
          this.ager(this.age)
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
      ageField.innerHTML = `I am ${i} months old!`
      this.age = i;
      if(i > 30){
        i = 0;
      }
    },30000);  //60 seoconds.  every 60 seconds the dog gets a month old.  
 }

}
