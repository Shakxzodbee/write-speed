//ELements
const word =document.querySelector('#word'),//h3
    text =document.querySelector('#input_area'),//text
    timeEL =document.querySelector('#time'),//time
    scoreEl = document.querySelector('#score'),//score
    endGameEl = document.querySelector('#end_game');//game



const words = [
    "Ota",
    "Kochmas",
    "Tepalik",
    "Oromgoh",
    "Kuch",
    "Tulpor",
    "Oyin",
    "Shm",
    "Sochq",
    "Kulcha",
    "Kamera",
    "Oy",
    "Gul",
    "Rezetka",
    "Dastur",
    "Soat",
    "Belgi",
    "Rejm",
    "Masofa",
    "Samalayot",
    "Jarima",
    "Mabil",
    "Xona",
    "Kuchli",
    "Dangasa",
    "Ustoz",
    "Darsik",
    "Mehanizatsiya",
    "Toshkent",
]

let randomWord;


let time = 60;

let score = 0;

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)]
}


function addToDom() {
    randomWord = getRandomWord()
    word.innerHTML= randomWord;

}


function updateScore () {
    score++;
    scoreEl.innerHTML=score;
}

function updateTime (){
    time--;
    timeEL.innerHTML= time + "s";

if (time === 0) {

    clearInterval(timeInterval)
    gameOver();
}

}

const timeInterval = setInterval(updateTime, 1000);

function gameOver( ) {
    endGameEl.innerHTML = `
    <h1>Vaqting qolmadi!</h1>
    <h3>Sening Achkoing ${score}</h3>
    <button onclick="location.reload()">Yangilash</button>
    `
    endGameEl.style.display = 'flex'

}

addToDom();

text.addEventListener("input", (e) => {
    const typedText = e.target.value;
   
    if(typedText === randomWord){
        updateScore(); //++1
        addToDom();
        e.target.value = ""; 
        updateTime();
    }


})
