const timeDisplay = document.querySelector("#timeDisplay")
const botaoComeçar = document.querySelector("#começar")
const botaoParar = document.querySelector("#parar")
const botaoReiniciar = document.querySelector("#reiniciar")

let tempoComeçar = 0; let tempoAtual = 0;
let tempoPassado = 0; let pause = true;
let intervaloID; let horas = 0;
let minutos = 0; let segundos = 0;

botaoComeçar.addEventListener("click", () => {
    if (pause){
        pause = false
        tempoComeçar = Date.now() - tempoPassado
        intervaloID = setInterval(atualizarTempo, 75)
    }
})
botaoParar.addEventListener("click", () => {

    if (!pause){
        pause = true
        tempoPassado = Date.now() - tempoComeçar
        clearInterval(intervaloID)
    }
})
botaoReiniciar.addEventListener("click", () => {
    pause = true
    clearInterval(intervaloID)
    tempoComeçar = 0; tempoAtual = 0; 
    tempoPassado = 0; horas = 0; 
    minutos = 0; segundos = 0;
    timeDisplay.textContent = "00:00:00"
})

function atualizarTempo(){
    tempoPassado = Date.now() - tempoComeçar
    segundos = Math.floor(tempoPassado / 1000 % 60)
    minutos = Math.floor(tempoPassado / (1000 * 60) % 60)
    horas = Math.floor(tempoPassado / ((1000 * 60 * 60)) % 60)
    segundos = zero(segundos)
    minutos = zero(minutos)
    horas = zero(horas)

    timeDisplay.textContent = horas + ":" + minutos + ":" + segundos


    function zero(unidade) {
        return (("0") + unidade).length > 2 ? unidade : "0" + unidade
    }
} 