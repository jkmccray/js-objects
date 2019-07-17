// Object behavior
// You can define a function as a key. These are called methods instead of properties.
// Can replace function keyword with arrow syntax, as long as you are not using "this".
// Think of functions as defining or changing the behavior of an object.
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

brutusTheDog.age = 5 // Modified the object's state by changing one of the values 

// Intro to "this"
// In the code below, "this" takes the place of "cletusTheDog". 
// If the name of the object were to change to "myDogCletus", you do not have to change multiple lines of code, only the variable name.
const cletusTheDog = {
  age: 4,
  species: "Dalmatian",
  contentsOfStomach: [],
  eat: function (item) {
      this.contentsOfStomach.push(item) // When using "this" in an object, the method cannot be an arrow function. It has to have the function keyword.
      debugger
  },
  puke: function () {
      this.contentsOfStomach.length = 0 // Easiest way to empty out an array
  },
  bark: function (something) {
      window.alert(`Cletus barks 'WOOF!' at ${something}`)
  }
}

cletusTheDog.eat("leftovers")
cletusTheDog.eat("treat")
cletusTheDog.eat("bunny")
console.log(cletusTheDog.contentsOfStomach)

