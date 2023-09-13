// //for each
// let l1=["ram",'prakasha',"virat"]
// l1.forEach(Capitalized)
// l1.forEach(print)
// function Capitalized(element,index,arr){
//     arr[index]=element[0].toUpperCase()+element.substring(1)
// }
// function print(element){
//     console.log(element)
// }

//example 2:
let arr=[1,2,3,4,5,6,7]
let values=arr.map(square);
values.forEach(print)
function square(ele){
    return ele**2
}
function print(ele){
    console.log(ele)
}
