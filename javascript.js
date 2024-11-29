console.log("Hello World!")


const playerPoints = document.getElementById('pontosH');
const computerPoints = document.getElementById('pontosC')
const resultadoParcial = document.getElementById('resultado')
const escolhaHumano= document.getElementById('eh')
const escolhaComputador = document.getElementById('ec')
const pontosFinal = document.getElementById('pontosFinal')
const humanChoiceR = document.querySelector(".btnR")
const humanChoiceP = document.querySelector(".btnP")
const humanChoiceT = document.querySelector(".btnT")

   
 
    
    humanChoiceR.addEventListener("click", ()=>playRound(0));
    humanChoiceP.addEventListener("click", ()=>playRound(1))
    humanChoiceT.addEventListener("click", ()=>playRound(2))

    let playerScore = 0   
    let computerScore = 0
    let empate = 0
   

    const isGameOver = () => playerScore+computerScore+empate === 5;
    

    function final (){
/*         console.log("Player score:", playerScore) */
        playerPoints.textContent = "Seus score: " + playerScore;
/*         console.log("Computer score:", computerScore) */
        computerPoints.textContent ="Computador score: " +  computerScore;
/*         console.log("Empate:", empate) */

        if (playerScore === computerScore){
            console.log ("Empate Final")
            pontosFinal.textContent = "Empate Final"
        }
            else if (playerScore < computerScore){
            pontosFinal.textContent = "Vencedor final Computador"
        }
            else if (playerScore > computerScore){
            pontosFinal.textContent = "Vencedor final VOCÊ"
            }
            
      
    }
  
        
         
    
function playRound (humanChoice){
    
   
    computerPoints.textContent ="Computador score: " +  computerScore;
    playerPoints.textContent = "Seus score: " + playerScore;
/*     console.log("Player score:", playerScore)
    console.log("Computer score:", computerScore)
    console.log("Empate:", empate) */
/*     let soma = playerScore+computerScore+empate */
    /* console.log("Soma:",soma) */
    let computerChoice = Math.floor(Math.random()*3)
/*     console.log ("Escolha randomica do computador, humano")
    console.log (computerChoice, humanChoice) */


    
    if (humanChoice === computerChoice){
/*        let resultado = "empate"  */
/*        console.log(resultado); */
       resultadoParcial.textContent = "EMPATE"
       empate++
    }
        else if (humanChoice === 0){
            escolhaHumano.textContent = "Pedra"
            if (computerChoice === 1){
            let resultado = "Computador venceu"
            console.log(resultado)
            resultadoParcial.textContent = "Pedra perde de Papel -> Computador Venceu!";
            computerScore++
            escolhaComputador.textContent = "Papel"
             
            }
            else if (computerChoice === 2){
            let resultado = "Voce venceu"
            console.log(resultado)
            resultadoParcial.textContent = "Pedra ganha de Tesoura -> Você Venceu!!";
            playerScore++
            escolhaComputador.textContent = "Tesoura"
            }
        }

        else if (humanChoice === 1){
            escolhaHumano.textContent = "Papel"
            if (computerChoice === 2){
            let resultado = "Computador venceu"
            console.log(resultado)
            resultadoParcial.textContent = "Papel perde de Tesoura -> Computador venceu!";
            computerScore++ 
            escolhaComputador.textContent = "Tesoura"
           
            }   
        
            else if (computerChoice === 0){
            let resultado = "Voce venceu"
            console.log(resultado)
            resultadoParcial.textContent = "Papel ganha de Pedra ->Você Venceu!";
            playerScore++ 
            escolhaComputador.textContent = "Pedra"    
        
            }
        }
    
        else if (humanChoice === 2){
            escolhaHumano.textContent = "Tesoura"
            if (computerChoice === 0){
            let resultado = "Computador venceu"
            console.log(resultado)
            resultadoParcial.textContent = "Tesoura perde de Pedra - Computador Venceu!";
            computerScore++
            escolhaComputador.textContent = "Pedra"
            } 
        
            else if (computerChoice === 1){
            let resultado = "Voce venceu"
            console.log(resultado)
            resultadoParcial.textContent = "Tesoura ganha de Papel -> Você Venceu!"
            playerScore++
            escolhaComputador.textContent = "Papel"
            }     
        }
        if(isGameOver()) {
            final();
        } 
     
       
}