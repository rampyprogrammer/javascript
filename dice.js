function spin(){
    let x= Math.floor(Math.random()*6)+1;
    let y= Math.floor(Math.random()*6)+1;
    let z= Math.floor(Math.random()*6)+1;

    document.getElementById("1").innerHTML=x;
    document.getElementById("2").innerHTML=y;
    document.getElementById("3").innerHTML=z;
}