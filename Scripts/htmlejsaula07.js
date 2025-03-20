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