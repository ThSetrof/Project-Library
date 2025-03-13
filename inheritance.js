// ES6 Classes 
// Due to the many problems associated with class inheritance,
// and the temptation to extend classes, I don’t recommend 
// this technique. I present it here only because it’s likely to
// be a familiar point of reference.

class Greeter {
    constructor(name){
        this.name = name || 'John Doe'
    }

    hello(){
        return `Hello, my name is ${this.name}`
    }
}

const george = new Greeter('George')

console.log(george.hello());

// Using Contructor Functions
function NewGreeter(name){
    this.name = name || 'John Doe'
}


NewGreeter.prototype.hello = function(){
    return `New Greeter: Hello, my name is ${this.name}`
}

const kelvin = new NewGreeter('Kelvin')
console.log(kelvin.hello())

// Using Factory Function
const proto = {
    hello(){
        return `Factory Method: Hello, my name is ${this.name}`
    }
}

const greeter = (name) => Object.assign(Object.create(proto), {name})

const david = greeter('David')

console.log(david.hello())