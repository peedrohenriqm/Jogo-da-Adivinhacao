const numeroSorteado = Math.round(Math.random() * 10);

const input = document.getElementById("input");
const botao = document.getElementById("button");
const body = document.querySelector("body");


input.focus();

botao.addEventListener("click", ()=> {
    validacao();
});

function validacao() {
    let chute = input.value;
    if ( chute == numeroSorteado ) {
        mostraNaTela();
    } else {
        body.innerHTML = ` <div id="erro"><h1> Você errou !!! </h1>
        <h2> O número sorteado era ${numeroSorteado}</h2>
        <button id="botaoAtualiza"> Jogar novamente </button>
        </div`;
        const botaoAtualiza = document.getElementById("botaoAtualiza");
        botaoAtualiza.addEventListener("click", ()=>{
            location.reload();
        })
    } 
}

function mostraNaTela() {
    body.innerHTML = ` <div id="acerto"><h1> Você acertou !!! </h1>
    <h2> O número sorteado é ${numeroSorteado}</h2>
    <button id="botaoAtualiza"> Jogar novamente </button>
    </div`;
    const botaoAtualiza = document.getElementById("botaoAtualiza");
        botaoAtualiza.addEventListener("click", ()=>{
            location.reload();
        })
    
    
}

botao.addEventListener("keypress", (evento)=> {
    if (evento.key == "Enter" ) {
      validacao();  
    }
})
console.log(numeroSorteado);

