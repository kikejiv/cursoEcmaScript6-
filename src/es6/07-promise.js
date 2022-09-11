//es algo que va a pasar

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
.catch(error => console.log(error));