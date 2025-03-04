console.log("Hello Typescript! ");

// type alias
// type printObj = (user: userData) => void;

// Interface
// interface userData {
//   id: number;
//   fullname: string;
//   admin: boolean;
// }

// const printObj = (user: userData) => {
//   console.log(user);
// };

// const user: userData = {
//   id: 10,
//   fullname: "ankit",
//   admin: true,
// };

// const user1: userData = {
//   id: 101,
//   fullname: "ankit jangra",
//   admin: true,
// };

// printObj(user);
// printObj(user1);

// ! Type Assertion
// Form Submit

// const form = document.querySelector("form") as HTMLFormElement;
// const input = document.querySelector("input") as HTMLInputElement;
// form.addEventListener("submit", (e: SubmitEvent) => {
//   e.preventDefault();
//   console.log(+input.value + 20);
// });

// interface User {
//   name: string;
//   age: number;

//   // [key: string]: string | number;
// }

// const user: User = {
//   name: "ankit",
//   age: 20,
// };

// const printUserName = (user: User) => {
//   console.log(user.name);
// };

// const printUserAge = (user: User) => {
//   console.log(user.age);
// };

// const printAnyKeyValue = (key: keyof User) => {
//   return user[key];
// };

// console.log(printAnyKeyValue('age'));

// ! Generic Types
