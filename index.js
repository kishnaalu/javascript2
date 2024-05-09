// down extension thunder client
// search dummy json
// copy url and paste in new request
//https://hoppscotch.io/

// console.log("hello world");
// console.log("my name is sonu");

// let name1="sonu";
// let name2= name1;
// console.log(name2, "first")
// name1="suraj"
// console.log(name2,"second")

// const collegename="Butwal Kalika Campus"
// const batch=2022;
// const studentname="Sonu Thapa";
// const uniregno=760454;
// const faculty= "BCA"
// const location="Butwal"
// console.log(`My name is ${studentname}. My faculty is ${faculty} in ${collegename}. It is located in ${location}.`)

// let token="access_token=ghjghfjhfjh"
// let key=token.split("=")[0]
// console.log(key)
// console.log(token.split("=")[1]);


//Day 3:
// Nested if
// let age = 2;
// if (age < 18) {
//   console.log("Not an adult");
// } else if (age >= 18 && age <= 60) {
//   console.log("Adult");
// } else {
//   console.log("Old enough");
// }

// //Compare number
// let a = 12;
// let b = 16;
// console.log("comparred 2 numbers:");
// if (a > b) {
//   console.log("A is greater", a);
// } else if (a < b) {
//   console.log("B is greater", b);
// } else {
//   console.log("both are equal");
// }

// let c = 4;
// let d = 35;
// let e = 0;
// console.log("comparred 3 numbers:");
// if (c > d && c > e) {
//   console.log(`c is greater ${c}`);
// } else if (d > c && d > e) {
//   console.log(`d is greater ${d}`);
// } else {
//   console.log(`e is greater ${e}`);
// }


function bmicalculator(){
    console.log("BMI Calculated")
let weight = 45
let height = 1.5 //in M
let BMI = weight/(height ** height)
console.log(`Your BMI is: ${BMI}`)
if(BMI<18.5){
    console.log("You are UNDERWEIGHT")
} else if(BMI>18.5 && BMI<25){
    console.log("You are NORMAL")
} else if(BMI>25 && BMI<30){
    console.log("You are OVERWEIGHT")
} else{
    console.log("You are OBESE")
}
}

bmicalculator()

