import { conectJson } from "./conectJson.js";

const data = await conectJson.getJson()

//Divisão dos temas
const secTheme = document.querySelector("#theme") 
//Divisão que mostrar as questões
const pageQuest = document.querySelector('#pageQuest')

//  PLACAR
let pontos = 0
let pontuacao = document.getElementById('pontos')
let placar = document.getElementById('placar')

//  PERGUNTAS
let numQ = document.getElementById('numquestao')
let perg = document.getElementById('pergunta')

//  ALTERNATIVAS
let a = document.getElementById('a')
let b = document.getElementById('b')
let c = document.getElementById('c')

// APRESENTA QUANTAS QUESTÕES FALTAM 
let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

const btnStart = document.querySelector("#button_start")

btnStart.addEventListener("click", function(){
    document.querySelector(".start").classList.add("disabled") 
    secTheme.classList.remove("disabled")
})

//TEMA ESCOLHIDO  
secTheme.addEventListener('click', function(btn){
    let tema = btn.target.firstChild.data
    secTheme.classList.add("disabled")
    pageQuest.classList.remove("disabled")
    
    document.getElementById("tema").innerText = tema

    creatQuest(tema)
    placar.classList.remove("disabled")
}
)
var num 
var cont =  1
var rightAnswer 

function creatQuest(tema){ 
   
    //Todas as perguntas
    if(cont == 11){
      end()
    }
    //Mostra a pontuação
    pontuacao.innerHTML = pontos
    numQ.innerHTML =  cont 

    //Escolhe o número da questao
    num = chooseNum(15,tema)

    var block = data.find(element => element.id == num)
    
    while(block == undefined){block = data[num]}
   
    let quest = (block.pergunta)
    rightAnswer = block.correta

    console.log(rightAnswer)
  
    //Mostra a pergunta, opções e a quatidade de questões
    perg.innerText = quest
    a.innerText = block[1]
    b.innerText = block[2]
    c.innerText = block[3]
    a.setAttribute('value', 'A')
    b.setAttribute('value', 'B')
    c.setAttribute('value', 'C')
    numero.innerText = cont
    total.innerText = "10"
  }


var usado = [] //Array com todos os número que já usaram
function chooseNum(tamanho,tema){
  let aleatorio = Math.floor(Math.random()*tamanho + 1)

  while(usado.indexOf(aleatorio) != -1 || aleatorio == undefined){
    aleatorio = Math.floor(Math.random()*tamanho + 1)
  }
  
  usado.push(aleatorio)

      switch (tema) {
        case 'Mundo': 
            aleatorio = aleatorio 
            break
        case 'Artes e Entretenimento':
            aleatorio = aleatorio + 15
            break
        case 'Sociedade':
            aleatorio = aleatorio + 30
            break;
        }
      return aleatorio
  
}

const answer = document.querySelector("#alternativas")

answer.addEventListener("click",function (btn){
    var resposta = btn.target.firstChild.data
    var tema = document.getElementById('tema').textContent

    if(rightAnswer == resposta){
        pontos = pontos + 10
        cont++
        creatQuest(tema)
    }
    else{ end() }

})
  
 function end(){
    pageQuest.classList.add("disabled")
    const btn = document.createElement('button')
    btn.classList.add("btn","btn-primary")
    btn.innerText = "Jogar Novamente"

    btn.addEventListener("click", function(){
      window.location.reload()
    })

    if(pontos == 100){
      const right = document.querySelector("#rightAnswer")
      right.classList.remove("disabled")
      right.appendChild(btn)
    }
    else{
      const wrong = document.querySelector("#wrongAnswer")
      wrong.classList.remove("disabled")
      wrong.appendChild(btn)
    }

  }
