const name='Dhiraj';
let age = 28;
const hobbies = true;



// different way to define function 

const showfunction =  function (name,age,hobbies){

    return 'The name is '+ name + 'and Age is'+age+'hobbies Are '+hobbies;

}

const arrow = () => {
   return 1+2;
}

const test = (a) => a+1;

const sum = () => 1+2;

console.log(sum());  

console.log(test(12));
console.log(arrow());
console.log(showfunction(name,age,hobbies));