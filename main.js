const numeroSorteado = Math.round(Math.random() * 10);

const input = document.getElementById("input");
const botao = document.getElementById("button");
const body = document.querySelector("body");

input.focus();

botao.addEventListener("click", ()=> {
    validacao();
});

function validacao() {
    if ( input.value == numeroSorteado ) {
        mostraNaTela();
    } else {
        body.innerHTML = ` <div id="erro"><h1> Você errou !!! </h1>
        <h2> O número sorteado era ${numeroSorteado}</h2></div`;
    }
}

function mostraNaTela() {
    body.innerHTML = ` <div id="acerto"><h1> Você acertou !!! </h1>
    <h2> O número sorteado é ${numeroSorteado}</h2></div`
}

window.SpeechRecognition = window.SpeechRecognition ||
webkitSpeechRecognition ;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak (evento) {
    const resultadoVoz = evento.results[0][0].transcript;
    let numeroConvertido = parseInt(resultadoVoz);
    console.log(numeroConvertido);
    
}
    
   

console.log(numeroSorteado);
