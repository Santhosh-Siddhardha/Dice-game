var n1 = Math.floor(6*Math.random())+1;
var n2 = Math.floor(6*Math.random())+1;

if(n1>n2){
   document.querySelector("h1").textContent="Player 1 wins!!";
}
else if(n2>n1){
    document.querySelector("h1").textContent = "Player 2 wins!!";
}
else{
    document.querySelector("h1").textContent = "Draw";
}

for(var i=1;i<=6;i++){
    if(i==n1){
        document.querySelector(".img1").src = "./images/dice"+i+".png";
    }
    if(i==n2){
        document.querySelector(".img2").src = "./images/dice"+i+".png";
    }
}