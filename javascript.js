console.log("Hello World!")


function GetComputerChoice(x){
    return Math.floor(Math.random()*x)
    
}
let choice = GetComputerChoice(3);
    console.log ("Escolha randomica do computador")
    console.log (choice)



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


function playRound (humanchoice, choice){
    if (humanchoice === choice){
         return  "Rodada Empatada, Joque novamente";
    }
    else if (humanchoice === 0){
        if (choice === 1){
            return  " Computador venceu. Pedra perde para Papel"
        }
        else if (choice === 2)
            return  " Voce venceu!! Pedra ganha de Tesoura"
    }
    else if (humanchoice === 1){
        if (choice === 2){
            return  " Computador venceu. Papel perde de Tesoura"
        }
        else if (choice === 0)
            return  " Voce venceu!! Papel ganha de Pedra"
    }
    else if (humanchoice === 2){
        if (choice === 0){
            return  " Computador venceu. Tesoura perde de Pedra"
        }
        else if (choice === 1)
            return  " Voce venceu!! Tesoura ganha de Papel"
    }
     
} 
console.log (playRound(humanchoice, choice))

