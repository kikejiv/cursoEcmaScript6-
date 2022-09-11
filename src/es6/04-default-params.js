//
function newUser(name, age,country) {  //froma antigua
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'MX';
    console.log(name, age, country);
}
newUser();
newUser('david', 15, 'CO');

//con EcmaScript 6

function newAdmin(name = 'Oscar', age = 32, country = 'CL') {
    console.log(name, age, country)
}
newAdmin();
newAdmin('Ana', 18, 'PE');