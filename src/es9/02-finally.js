const anotherFunction = () => {
    return new Promise((resolve, reject) => {
       if(false) {
           resolve('felicitaciones funciono!!!');
       } else {
           reject('Oh... no funciono');
       }
    }) 
}

anotherFunction()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Por fin termino!') );