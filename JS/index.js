console.log("Working");

let height = 34;
var age = 12;
const API_KEY = "123456890";

let firstName = "Dean";
let lastName = "Michael";
console.log(firstName + " " + lastName);
console.log(firstName + " " + lastName);

console.log(firstName);
console.log(age);
console.log(API_KEY);

let message = "Hello World";

let very_big_number = 87276840383635252;
console.log(typeof very_big_number);
BigInt;
console.log(typeof firstName);
String;

console.log(`${firstName} ${lastName} is ${age}years old`);

let user = {
    id: "SKU-1234",
    surname: "Kayode",
    Name: "",
    phoneNumber: "08099929384",

};

// console.log(user.id);
// console.log(user["age"]);
// console.log(Object.values(user));
// let userId = prompt("whats your id number?");
// user.id = userId
// let Name = prompt("whats your name?");
// user.Name = Name;
// let surname = prompt("whats your surname?")
// user.surname = surname;
// let phoneNumber = prompt("What is your phone number?");
// user.phoneNumber = phoneNumber;

// alert(`${user.id}\n${user.Name}\n${user.surname}\n${user.phoneNumber}`);

// console.log(2 ** 2);

// numbers = [1,2,3,4,5,6,7,8,9,10]

// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]); 
// }

// for(let i of numbers){
//     console.log(i)
// }

// console.log(numbers[5])

// setTimeout(()=>console.log("Dean"),3000)


let sum = (param1, param2) => {
    x = param1 +1;
    param2(param1,x)

}

console.log(
    sum(5,(num1, num2) => {
        return num1 -num2
})
);
