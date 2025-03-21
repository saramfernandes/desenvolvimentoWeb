/*

--------- Do dia 19.03:

function funcao01() {
    const now = new Date();
    const txt = now.toLocaleDateString();
    alert(txt);
}

const funcao02 = function(){
    alert('Usando a função anônima 1');
} 
const funcao03 = function(){
    alert('Usando a função anônima 2');
} 

function escolheFnc(){
    const radio = document.getElementsByName("fnc");
    if(radio[0].checked){
        document.getElementById("bt02").onclick = funcao02;
    }else{
        document.getElementById("bt02").onclick = funcao03;
    }
}
document.getElementById('bt02').onclick = funcao02;
*/

/*

---------- Exemplo do professor:

function calcularSoma() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const soma = somarNumeros(numero1, numero2);
    document.getElementById('resultado').innerText = 'A soma é: ' + soma;
}
*/

///////////////////////////////////////////////////////////////////////////////
//         DESCOBRIR O PORQUE O BOTÃO "CALCULA SOMA" NÃO ESTÁ FUNFANDO
//       Este código não está bonito, está apenas funcional (as vezes) :)

function somarNumeros(a, b) {
    return a + b;
}
function diminuirNumeros(a, b) {
    return a - b;
}
function multiplicarNumeros(a, b) {
    return a * b;
}
function dividirNumeros(a, b) {
    return a / b;
}

function escolheFnc2(){
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const radio = document.getElementsByName("fnc");
    if(radio[0].checked){
        const soma = (document.getElementById("bt03").onclick = somarNumeros(numero1, numero2));
        document.getElementById('resultado').innerText = 'A soma é: ' + soma;
    }else if (radio[1].checked){
        const diminuir = (document.getElementById("bt03").onclick = diminuirNumeros(numero1, numero2));
        document.getElementById('resultado').innerText = 'A diminuição é: ' + diminuir;
    }else if (radio[2].checked){
        const multiplicar = (document.getElementById("bt03").onclick = multiplicarNumeros(numero1, numero2));
        document.getElementById('resultado').innerText = 'A multiplicação é: ' + multiplicar;
    }else{
        const dividir = (document.getElementById("bt03").onclick = dividirNumeros(numero1, numero2));
        document.getElementById('resultado').innerText = 'A divisão é: ' + dividir;
    }
}

// Quando apertar x tem que limpar o que escreveu, mas eu não consegui fazer ainda >:,(
function capturaTecla(event){
    if (event.key == "x" || event.key == "X"){
        document.getElementById('nome').value = "";
        alert(event.key);
    }

}

function alterarConteudo() {
    const titulo = document.getElementById('titulo');
    titulo.textContent = "Título alterado pelo JavaScript";

    const primeiroParagrafo = document.querySelector('.paragrafo');
    primeiroParagrafo.classList.add('highlight');

    const todosParagrafos = document.querySelectorAll('.paragrafo');
    todosParagrafos.forEach((paragrafo, index) =>{
        paragrafo.textContent = `Parágrafo ${index + 1} alterado pelo JavaScript`;
    });

    alert('Alterações realizadas!');
}