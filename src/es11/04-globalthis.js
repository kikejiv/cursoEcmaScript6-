//acceder al objeto global bien sea en el navegador, en el computador o en webworker
console.log.log(window)  // navegador
console.log.log(global)  // node
console.log.log(selft)  // webworker
console.log.log(globalThis);  // expone la informacion segun donde sea llamada, navegador, windows o webworker
