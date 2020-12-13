class Person {
    constructor(name) {
        this.name = name
    }

    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name);
        },100)
    }

    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name); // this. has another purpose in a normal function
        }, 100)
    }
   

}

let person = new Person ('Marius')
person.printNameArrow()
person.printNameFunction()
console.log(this.name);