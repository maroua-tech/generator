let gen = document.querySelector("button");
let serial = document.querySelector("input[type='text']");
let char = '0123456789abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWYZ'
let imgs = ["1.jpg", "2.jpg"];
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function generate() {
    document.querySelector(".container").style.backgroundImage = `url( ${imgs[Math.floor(Math.random() * imgs.length)]} )`;
    
    document.querySelector(".container").style.backgroundSize = "cover";
}
function generateColor() {
    let coleur = "#";
    for (let i = 0; i < 6; i++) {
        coleur += hex[Math.floor(Math.random() * hex.length)];
        
    }
    document.querySelector("h1").style.color = coleur;
    document.querySelector("h1").style.borderRightColor = coleur;
    document.querySelector("input").style.color = coleur;
    document.querySelector("button").style.backgroundColor = coleur;
    document.querySelector("input").style.borderColor = coleur ;
    document.querySelector(".container").style.borderColor = coleur;
}
setInterval(generateColor, 1000);
setInterval(generate, 1000);
gen.addEventListener('click', function () {
    let serialNumber = "";
    for (let i = 0; i < 9; i++) {
        if (i == 2 || i == 5) {
            serialNumber += char[Math.floor(Math.random() * char.length)] + "-";
        }
        else {
            serialNumber += char[Math.floor(Math.random() * char.length)];
        }
    }
    serial.value = serialNumber;
    // document.write = Math.floor(Math.random() * 5);
    // console.log(Math.floor(Math.random() * 5));
});