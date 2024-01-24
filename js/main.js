import { connectJson } from "./connectJson.js";

const data = await connectJson.getJson()

//Divisão dos temas
const secTheme = document.querySelector("#theme")
//Divisão que mostrar as questões
const pageQuest = document.querySelector('#pageQuest')

//  PLACAR
let points = 0
let pointing = document.getElementById('pontos')
let scoreboard = document.getElementById('placar')

//  PERGUNTAS
let numQuest = document.getElementById('numQuest')
let questDiv = document.getElementById('pergunta')

//  ALTERNATIVAS
let alternatives = []
alternatives[0] = document.getElementById('a')
alternatives[1] = document.getElementById('b')
alternatives[2] = document.getElementById('c')

// APRESENTA QUANTAS QUESTÕES FALTAM 
let number = document.querySelector('#numero')
let total = document.querySelector('#total')

const btnStart = document.querySelector("#button_start")

btnStart.addEventListener("click", function () {
  document.querySelector(".start").classList.add("disabled")
  secTheme.classList.remove("disabled")
})

//TEMA ESCOLHIDO  
secTheme.addEventListener('click', function (btn) {
  let topic = btn.target.firstChild.data;

  secTheme.classList.add("disabled");
  pageQuest.classList.remove("disabled");

  document.getElementById("tema").innerText = topic

  createQuest(topic)
  scoreboard.classList.remove("disabled")
}
)
let num
let counter = 1
let rightAnswer

function createQuest(topic) {

  //Todas as perguntas
  if (counter == 11) {
    endGame()
  }
  //Mostra a pontuação
  pointing.innerHTML = points
  numQuest.innerHTML = counter

  //Escolhe o número da questão
  num = chooseNum(data[topic]?.length - 1)

  let block

  while (block == undefined) {
    block = data[topic].find(element => element.id === num)
  }

  let quest = (block.pergunta)
  rightAnswer = block.correta

  console.log(rightAnswer)

  //Mostra a pergunta, opções e a quantidade de questões
  questDiv.innerText = quest
  alternatives[0].innerText = block[1]
  alternatives[1].innerText = block[2]
  alternatives[2].innerText = block[3]
  alternatives[0].setAttribute('value', 'A')
  alternatives[1].setAttribute('value', 'B')
  alternatives[2].setAttribute('value', 'C')
  number.innerText = counter
  total.innerText = "10"
}


let pastNumber = [] //Array com todos os número que já usaram
function chooseNum(tamanho) {
  let randomNum = Math.floor(Math.random() * tamanho + 1)

  while (pastNumber.indexOf(randomNum) != -1 || randomNum == undefined) {
    randomNum = Math.floor(Math.random() * tamanho + 1)
  }

  pastNumber.push(randomNum)

  return randomNum
}

const answer = document.querySelector("#alternativas")

answer.addEventListener("click", function (btn) {
  let answer = btn.target.firstChild.data
  let topic = document.getElementById('tema').textContent

  if (rightAnswer == answer) {
    points = points + 10
    counter++
    createQuest(topic)
  }
  else { endGame() }

})

function endGame() {
  pageQuest.classList.add("disabled")
  const btn = document.createElement('button')
  btn.classList.add("btn", "btn-primary")
  btn.innerText = "Jogar Novamente"

  btn.addEventListener("click", function () {
    window.location.reload()
  })

  if (points == 100) {
    const rightAnswer = document.querySelector("#rightAnswer")
    rightAnswer.classList.remove("disabled")
    rightAnswer.appendChild(btn)
  }
  else {
    const wrongAnswer = document.querySelector("#wrongAnswer")
    wrongAnswer.classList.remove("disabled")
    wrongAnswer.appendChild(btn)
  }

  bestScore(points)

}

function bestScore() {
  const itens = JSON.parse(localStorage.getItem("bestScore")) || '';
  const bestH1 = document.querySelector('#score');
  const bestP = document.querySelector('#scoreContent');

  let best = points;
  if (itens == '') {
    localStorage.setItem('bestScore', JSON.stringify(points))

  }
  else {

    if (points > itens) {
      localStorage.setItem('bestScore', JSON.stringify(points))
    } else {
      best = itens;
    }
    bestP.classList.remove("disabled")
    bestH1.innerText = best;

  }


}
bestScore()