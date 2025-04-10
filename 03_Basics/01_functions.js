function sayMyName() {
  console.log("A");
  console.log("D");
  console.log("I");
  console.log("T");
  console.log("Y");
  console.log("A");
}

// sayMyName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

const result = addTwoNumbers(3, 6);
// console.log("result: ", result);

function loginUserMessege(username) {
    if(!username){
 console.log("Please Enter a Username");
 return ;
    }
  return `${username} just logged in. `;
}

// console.log(loginUserMessege("aditya"));
// console.log(loginUserMessege());

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "aditya",
    prices: 999
}

function handleOnject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
};
// handleOnject(user);

handleOnject({
    username: "sam",
    price: 399
});

const myNewArray = [
    200, 400, 100, 600
]

function returnSecondValue(getArray){
return getArray[1];
}

console.log(returnSecondValue(myNewArray));
