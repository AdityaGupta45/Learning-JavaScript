const mySym = Symbol("Key1") ;

const JsUser = {
    name: "Aditya",
    "full name" : "Aditya Gupta",
    [mySym] : "myKey1",
    age: 20 ,
    email: "aditya@google.com",
    location: "Mumbai",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email= "aditya@chatgpt.com";

// Object.freeze(JsUser);
JsUser.email= "aditya@microsoft.com";

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
};
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
};
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
