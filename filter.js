let num=[1,2,3,4,5,6,7,8,97,5,54]

let res=num.filter(CheckEle)


function CheckEle(ele){
    return ele%2==0
}
console.log(res)