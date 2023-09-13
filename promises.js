const is_shop_open=true;
function Time(s){
    return new Promise((resolve, reject) => {
        if (is_shop_open){
            setTimeout(resolve("the promise is succesfull "),s)
        }else{
            reject("the shop is closed...")
        }
    })
}
async function FetchData(){
    try{
        
    console.log("take the order from the customer..")
    let res=await Time(1000)
    console.log("the order is strawberry ",res)

    await Time(12)
    console.log("start the production ..")

    await Time(2000)
    console.log("the given order is ready you can serev it now.")

    await Time(3000)
    console.log("the arder is succesfully served and they satisfied with that order they gave tips")
    }
    catch(err){
        console.log(err)
    }
    finally{
        
    }
}
FetchData()

