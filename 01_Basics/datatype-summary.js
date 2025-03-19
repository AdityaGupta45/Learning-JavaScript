// # Primitive (Call by Value)

// 7 TypeError: String, Number, Boolean, null, Undefined, Symbol, BigInt 

// # Non-Primitive (Call by Reference) 

// Array, Object, Functions

const  score = 100 ; 
const  scoreValue = 100.3 ; 
const  isLoggedIn = false ; 
const  outsideTemp = 100 ; 
let Value ;

const id = Symbol("123")
const anotherId = Symbol("123") ;

console.log(id === anotherId) ;

const heroes = ["superman", "shaktiman", "batman"] ;
let myObj = {
    name: "aditya" ,
    age: 20 ,
}

const myFunction = function(){
console.log("Hello World") 
} ;

// Stack Memory (Primitive) , Heap Memory(Non Primitive)

let myName = "Aditya" ;
let myAnotherName = myName ; 
myAnotherName = "Harsh" ;
console.log(myName) ;
console.log(myAnotherName) ;

let userOne = {
    email: "user@gmal.com",
    upi: "user@sbi"
}
let userTwo = userOne ;
userTwo.email = "aditya@gmail.com" ;

console.log(userOne.email);
console.log(userTwo.email)