const getColor =() => {
    const randomNumber=Math.floor(Math.random()*16777215);
    const randomCode="#"+randomNumber.toString(16);     //converts to hexadecimal code string by using code 16
    document.body.style.backgroundColor=randomCode;
    document.getElementById("color-code").innerText=randomCode

}
document.getElementById("btn").addEventListener(
    "click",
    getColor   //event call(when event occurs)
)
getColor()   //inital call(when page loads)