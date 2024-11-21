console.log("Hello World!")
let humanScore = 0
let computerScore = 0
let empate = 0

for (var i = 0; i < 6; i++){

function GetComputerChoice(x){
    return Math.floor(Math.random()*x)
    
}
let choice = GetComputerChoice(3);
 



let escolha = prompt("Escolha entre Pedra, Papel ou Tesoura");
console.log ("Escolha do humano")
/* console.log(escolha)
console.log ("Transição para UpperCase") */
function getHumanChoice(escolha){
    return escolha.toUpperCase()

 }
    escolha = getHumanChoice(escolha);
  /*   console.log (escolha) */


/* console.log ("Transição para numeral") */
function numeral(escolha){
    if (escolha === "PEDRA"){
    return 0 
    }
    else if (escolha ==="PAPEL"){
        return 1
    }
    else if (escolha ==="TESOURA"){
        return 2
    }
}

/* console.log (numeral(escolha)) */
let humanchoice = numeral(escolha)
console.log (humanchoice)
   console.log ("Escolha randomica do computador")
    console.log (choice)



function playRound (humanchoice, choice){
    if (humanchoice === choice){
       return  "Empate";
    }
    else if (humanchoice === 0){
        if (choice === 1)
            return  "Computador venceu"
        
        else if (choice === 2)
            return  "Voce venceu"
        
    }
    else if (humanchoice === 1){
        if (choice === 2)
            return  "Computador venceu"
        
        else if (choice === 0)
            return  "Voce venceu"
        }
    
    else if (humanchoice === 2){
        if (choice === 0)
            return  "Computador venceu"
        
        else if (choice === 1)
            return  "Voce venceu"
        
    }
     
} 
/* console.log (playRound(humanchoice, choice)) */
let resultado = playRound(humanchoice, choice)
/* console.log (resultado) */

if (resultado === "Empate"){
    empate++}
    else if (resultado === "Voce venceu"){
    humanScore++}
    else if (resultado === "Computador venceu"){ 
    computerScore++}




console.log ("humano",humanScore, "empate", empate,"computador", computerScore)
console.log ("Jogo", i, "de 5" )
}
  

if (humanScore>computerScore){
    console.log("Voce é o vencedor final!!!")
}
else if (humanScore<computerScore){
    console.log("O Computador venceu!!!")
}
else if (humanScore===computerScore){
    console.log ("EMPATE")
}



