const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)  //es otra forma de utilizar el if 
        ? setTimeout(() => resolve('AsynC!!'), 2000)
        : reject(new Error('Error!'));  // los : hace referencia al else
    });
}

const anotherFn = async () => {
    const somethig = await fnAsync();
        console.log(somethig);
        console.log('Hello!');
}

console.log('Before');
anotherFn();
console.log('After');