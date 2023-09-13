let prices=[10,20,14,30];
let total=prices.reduce(add)

console.log(`the total price is $${total}`)
function add(total,ele){
    return total+ele
}