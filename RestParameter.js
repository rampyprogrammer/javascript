/*function RestPara(a,...b){
    console.log(a);
    console.log(b);

}
RestPara(123,10,20,30,40,50)*/

//parameter destructing ...
const user={
    n:"ramu",
    age:23
}
function ParaDestruct({n,age}){
    console.log(n)
    console.log(age)
}
ParaDestruct(user)

user={n,age}
console.log(n,age)