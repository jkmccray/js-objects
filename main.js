// Object behavior
// You can define a function as a key. These are called methods instead of properties.
const rufusTheDog = {
  age: 4,                 // Property
  species: "Dalmatian",   // Property
  bark: function () {     // Method
      window.alert("WOOF!")
  }
}

rufusTheDog.bark()


// You can also accept arguments that change the behavior of the method.
const brutusTheDog = {
  age: 4,
  species: "Dalmatian",
  bark: function (something) {
      window.alert(`Brutus barks 'WOOF!' at ${something}`)
  }
}

brutusTheDog.bark("mailman")
brutusTheDog.bark("leaf")
brutusTheDog.bark("child")

// Intro to "this"
// In the code below, "this" takes the place of "cletusTheDog". 
// If the name of the object were to change to "myDogCletus", you do not have to change multiple lines of code, only the variable name.
const cletusTheDog = {
  age: 4,
  species: "Dalmatian",
  contentsOfStomach: [],
  eat: function (item) {
      this.contentsOfStomach.push(item)
      debugger
  },
  puke: function () {
      this.contentsOfStomach.length = 0
  },
  bark: function (something) {
      window.alert(`Cletus barks 'WOOF!' at ${something}`)
  }
}

cletusTheDog.eat("leftovers")
cletusTheDog.eat("treat")
cletusTheDog.eat("bunny")
console.log(cletusTheDog.contentsOfStomach)

