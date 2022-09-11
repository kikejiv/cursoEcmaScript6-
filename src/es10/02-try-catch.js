// este metodo sirve para los manejos de errores
try {
    hello();
} catch (error) {
    console.log(error);
}

//se tiene esta misma sintaxis en es10
try {
    anotherFn();
} catch {
    console.log('Esto es un error!')
}