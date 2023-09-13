// // let i=0;
// // do{
// //     console.log("jai shree ram")
// //     i+=1
// // }while(i<10);

// //iterating over a string----
// let name="hello evry one my name is ram"
// for(i of name){
//     console.log(i)
// }

let hello=function(){
    console.log("hello this is hello...")
}

let res=(hello)=>{
    setTimeout(()=>{console.log("hello this is ramu")
    hello()
setTimeout(()=>{console.log("goood morning..")
},1000)
},2000)
    
    
}

res(hello)