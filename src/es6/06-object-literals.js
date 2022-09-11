//mejoras object literals   como se hacia una funcion y se retornaba un objeto  y/o como se le asignaban valores a los objetos

function newUser(user, age ,country){
    return{
       user: user,
       age: age,
       country: country, 
    }
}

// como se trabaja despues de las mejoras ecma6
function newUser(user, age ,country, uId){
    return{
       user,
       age,
       country, 
       id: uId
    }
}

console.log(newUser("gndx", 34, "MX", 1));