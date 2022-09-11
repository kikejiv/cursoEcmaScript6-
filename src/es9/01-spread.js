//manipulaciones para obtener objetos de una array
const user = { username: 'kike', age: 36, country: 'CO'};
const {username, ...values } = user;
console.log(username);
console.log(values);