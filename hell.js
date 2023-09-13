function hell(){
    setTimeout(()=>{
        console.log("the operation is started....")
        setTimeout(()=>{
            console.log("operation one completed.")
            setTimeout(()=>{
                console.log("operation two completed.")
                setTimeout(()=>{
                    console.log("operation three is completed.")
                },3000)
            },1000)
        },2000)
    },1000)
}

hell();