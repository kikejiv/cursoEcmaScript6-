//cambia de array a objetos
const entries = new Map([["name", "oscar"], ["age", 34]]);
console.log(entries);
console.log(Object.fromEntries(entries));