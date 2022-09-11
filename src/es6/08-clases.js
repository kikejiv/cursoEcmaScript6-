// asi se declara una clase
class User {};
//asi se instancia una clase
const newUser = new User();

//-----ejemplo-----------
class user {
    //metodos
    greeting(){
        return 'Hello!!!';
    }
};

//generando la instancia  de la clase
const gndx = new user();
console.log(gndx.greeting());
//herencia
const bebeloper = new user();
console.log(bebeloper.greeting());

//constructor
class user {
    //constructor
    constructor() {
        console.log('Nuevo Usuario');
    }
    greeting(){
        return 'Hello!!!';
    }
}

const david = new user();

//this (hace referencia al elemento padre que la contiene)

class user {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greeting());


// setters y getters

class user {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const bebeloper1 = new user('David', 15 );
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);