var a = ["/images/dice1.png","/images/dice2.png","/images/dice3.png","/images/dice4.png","/images/dice5.png","/images/dice6.png"]
var num = Math.floor(Math.random() * 6);
var num1 = Math.floor(Math.random() * 6);
var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src",a[num])
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src",a[num1])
if(num>num1){
    document.querySelector("h1").innerHTML = "Player1 wins!"

}
else if (num1>num) {
    document.querySelector("h1").innerHTML = "Player2 wins!"
    
} 
else {
    document.querySelector("h1").innerHTML = "Draw"
    
}
function RefreshPage(){
    window.location.reload();
}