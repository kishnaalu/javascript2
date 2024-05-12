// console.log("sonu")
// let friend=["daniwl", "mark" , "john" , "madhav" , "shyam" , "krishna"]
// console.log(friend[friend.length-2])
// //or
// console.log(friend[4])
// console.log(friend.indexOf("john"))

// let john= friend.indexOf("john")
// console.log(friend[john])

// const years= new Array(2000,2001,2002)
// console.log(years)

// // array inside array
// const students=new Array("suraj", "delta", "sandhya", "manish", [friend])
// console.log(students)

// const calcage=function(birthyear)
// {
//     return 2024-birthyear
// }

// const yeararray=[2000,2001,2002,2003,2004]
// const age1=calcage(yeararray[0])
// const age2=calcage(yeararray[1])
// const age3=calcage(yeararray[2])
// const age4=calcage(yeararray[3])

// console.log(age1, age2, age3)

// Basic end 

// const friend= ["michael", "steven", "peter"]
// console.log(friend)

// friend.push("john") //to add new value at back
// console.log(friend)

// friend.unshift("sonu") // add new value infront
// console.log(friend)

// friend.pop() // remove value from last
// console.log(friend)

// friend.shift() // remove first valye
// console.log(friend)

// friend.pop("steven") // remove element after steven
// console.log(friend)

// if(friend.includes("michael")){
//     console.log("you have this friend")
// } else{
//     console.log("you dont have one")
// }


// calculate tip with array
// const calctip = function(bill){
//     return (bill>=50 && bill<=300) ? (bill*0.15) : (bill*0.2)
// }

// const bill = [275, 555, 441]
// const bill1 = calctip(bill[0])
// const bill2 = calctip(bill[1])
// const bill3 = calctip(bill[2])

// console.log(`the tip amount for bill 1 is: ${bill1}`)
// console.log(`the tip amount for bill 2 is: ${bill2}`)
// console.log(`the tip amount for bill 3 is: ${bill3}`)

// const tips = [bill1, bill2, bill3]
// console.log(tips)



// Object
// const person = {
//     fname: "Sonu",
//     lname: "Thapa",
//     college: "Kalika",
//     birthyear: 2004,
//     calcage: function(birthyear){  // object through function
//      return 2024-birthyear //can also use this.birthyear
//     },
//     hasdrivinglicense: true,
//     friends: ['sonu' ,'suraj','manish']


// }
// console.log(person)
// console.log(person.fname)
// console.log(person.lname)
// console.log(person.college)
// console.log(person.friends)
// console.log(person.calcage(2004))
// console.log(person["fname"]) // can call through like this also


// access value dynamically // MOSTLY USED IN FRONT-END 

// const propertytype= "college"
// console.log(person[propertytype])

// const propertytype= prompt("what do u want to display")
// if(person[propertytype]){
// console.log(person[propertytype])
// } else{
//     console.log("property is invalid")
// }

//TO ADD THE PROPERTY IN PERSON OBJECT
// person.locatio= "nepal"
// person.facebook= "sonuthapa"
// console.log(person)

//TO DELETE THE PROPERTY
// delete person.friend


const person = {
    fname: "Sonu",
    lname: "Thapa",
    birthyear: 2004,
    
    calcage: function(){  
     return 2024- this.birthyear 
    },
    
    hasdrivinglicense: function (){
        return this.calcage()>=18 ? "driving license" : "no driving license"
    }
   
}

console.log(`${person.fname} ${person.lname} is ${person.calcage()} years old. She has ${person.hasdrivinglicense()}`)

// const mark={
//     fullname: "Sonu",
//     mass:45,
//     height: 1.5,
//     BMI: function calcBMI(){
//         this.bmi=this.mass/this.height**2
//     return this.bmi
// }
// }

// mark.calcBMI(mark.BMI())