let value=0
document.getElementById("increment").onclick=function(){
    value+=1
    document.getElementById("text").innerHTML=value;

}
document.getElementById("decrement").onclick=function(){
    
    value-=1
    if(value<=0){
        value=0
        document.getElementById("text").innerHTML=value;
    }
    else{
        document.getElementById("text").innerHTML=value;
    }

}
document.getElementById("reset").onclick=function(){
    value=0
    document.getElementById("text").innerHTML=value;

}