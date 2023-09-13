//object 
const person={
    name:"virat",
    age:34,
    "designation":"great cricketer"
}
// person.jersyNumber=18
// person["name"]="virat the king kohli"


// // for(item in person){
// //     console.log(item +" : "+person[item])
// // }
// console.log(person.designation )

//accesing only keys
console.log(Object.keys(person))

// accesing the only values
console.log(Object.values(person))

//accesing the entire key value pairs
console.log(Object.entries(person))
