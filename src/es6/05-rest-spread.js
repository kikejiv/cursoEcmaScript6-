//destructuracion de un array
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b) // o console.log(a, fruits[1]);   cualquiera de los dos casos funciona

//destructuracion de un objeto

let user = {username: 'Oscar', age: 34};
let {username, age} = user;
console.log(username, age);



//operador de propagacion (spread operator)

let person = { name: 'Oscar', age: 28};
let country = 'MX';

let data = { id: 1, ...person, country };
console.log(data);

//parametros rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);