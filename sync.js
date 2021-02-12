//let's start by writting oldway synchronous code
//create  function that prints your second name
const secondName = () => {
    console.log('your second name')
}
//create  function that prints your first name to the console
const firstName = () =>{
    console.log('your first name')
    //call the secondName function below
    //it will be printed after the firstName function is called
   secondName()
   
}
firstName()
//this code is synchronous
//all the instructions are executed one by one 
//line by line just in the order they appear in the code
const aliasName = () =>{
    console.log ('end with your alias')
}
aliasName()