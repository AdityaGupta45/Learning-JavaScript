// const tinderUser = new object()
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "aditya@google.com",
  fullName: {
    userFullName: {
      firstName: "Aditya",
      lastName: "Gupta",
    },
  },
};
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2, obj4);
const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);
const user = [
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 1,
    email: "a@gmail.com",
  },
];
user[1].email;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
  courseName: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
}
// course.courseInstructor

const {courseInstructor: instructor} = course ;
console.log(instructor);

// {
//   "name": "Aditya",
//   "coursename": "js in hindi",
//   "price": "free"

// }
