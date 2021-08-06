let palettes=document.querySelectorAll(".palette");
let generateBtn=document.getElementById("gen-btn")
let spans=document.querySelectorAll("#spans");

window.addEventListener('load',assignPaletteColor)
generateBtn.addEventListener('click',assignPaletteColor  )

//functions

function generateRandomColor() {
let symbols="0123456789abcdef";
let randomNum=generateRandomNumber(symbols);
let color="";
for(let i=0; i<6; i++) {
    randomNum=generateRandomNumber(symbols);
color+=symbols[randomNum];


}

 return '#'+color;
}



function generateRandomNumber(symbol) {
 return Math.floor(Math.random()*symbol.length);
}



function assignPaletteColor() {


    palettes.forEach(palette=>{
    
    palette.style.backgroundColor=generateRandomColor();
    let children=palette.childNodes //yields an array of children of the node
    children[1].innerHTML=generateRandomColor()
    
    })
    
    }


    function copyText() {


        var text=document.createElement('textarea');
spans.forEach(span=>{
span.addEventListener("click",()=>{


    text.value=span.textContent;
    document.body.append(text);
    text.select();

document.execCommand("copy");
text.remove()
alert(text.value + " copied to clipboard")



})



})



    }


    copyText()