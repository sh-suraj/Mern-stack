/*
1. Template literals
2. Destructuring
3. Array methods & for/of
4. Arrow functions
*/

const name = "ram";
const age = 20;
const address = "ktm";

const result =
  "hello my name is " +
  name +
  " and I am " +
  age +
  " years old. I live in " +
  address;

console.log(result);

// template literals:``
const result2 = `Hello my name is ${name} and i am ${age} years old and I live in ${address}.`;
console.log(result2);

//Destructuring
/**
 * 1.object destructuring
 * 2.Array destructuring
 *
 */

//1. obj dest...
const course = {
  title: "csit",
  duration: "4 years",
  price: 425000,
};
// console.log(course.title);
const { title: courseName, duration, price } = course;
console.log(courseName);
console.log(duration);
console.log(price);

//array destru...
const data = ["damak", "sheela", "bachelor", 2, "BBS", "suraj", "5"];
const [Laddress, Hername, level, currentYear, cName, bf, yor] = data;
console.log(bf);
console.log(Hername);
console.log(yor);

//spread operator (...)
const profile = {
  name: "suraj",
  address: "damak",
  age: 20,
};
const user = {
  email: "sr12@gmail.com",
  password: "123",
};

// const userData={
// name: profile.name,
// age:profile.age,
// address:profile.address,
// email:user.email,
// password:user.password,
// }

const UserData = {
  ...profile,
  ...user,
};
console.log(UserData.name);

const marks = [80, 90, 60, 24, 96, 100];
const stdData = [...data, ...marks];
console.log(stdData[0]);

//combined destructuringa and spread operator

const [adds, ...herdata] = stdData;
console.log(adds);
console.log(...herdata);

//4.Arrow function
// normal function
function hellonormalfunction() {
  console.log(`hello ${UserData.name}`);
}
const helloarrowfunction = () => {
  console.log(`hello ${Hername}`);
};
hellonormalfunction();
helloarrowfunction();

function sum(a, b) {
  console.log(a + b);
}
const add = (a, b) => console.log(a + b);
sum(2, 3);
add(5, 10);

// anonymous function: function without any name or identity
// function (){
//     //code
//     return 2;
// }
// ()=>2;
// ()=>{ //anonymous arrow function
//     return 2+3;
// }

console.log("======================================================");
/**3. array methods and for/of loop*/
const decimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (i = 0; i < decimal.length; i++) {
  console.log(decimal[i]);
}
console.log("======================================================");
// for of loop
console.log("returning from for of loop");
for (const myDecimal of decimal) {
  console.log(myDecimal);
}
console.log("======================================================");
//for each loop
console.log("for each loop");
decimal.forEach((mydec) => {
  console.log(mydec);
});
