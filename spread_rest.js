const person = {
    name :'Dhiraj',
    age : 28,
     test() {  
        console.log('Hi I am'+this.name);  
    },
    test1(){
        console.log("this is test1");
    }  
};  



//example of spread operator 
const copyperson = {
    ...person
}  
console.log(copyperson);   
const hobbies = ["cricket","Football","bollyboll"];
const copyhpbbies = [...hobbies]; 
console.log(copyhpbbies);



//example of rest operator 
const  examplefunction = (par1,par2,par3)=>{
    return [par1,par2,par3];
}
console.log(examplefunction(1,2,3));  

const rest = (...args)=>{
    return args;    
}
console.log(rest(1,2,3,4,5)); 

