function alterarConteudo(){
    const titulo = document.getElementById('titulo');
    const paragrafo = document.getElementById('paragrafo');

    titulo.textContent = 'Novo Título';
    paragrafo.innerHTML = 'Texto atualizado com <strong>innerHTML</strong>!';
}

function alterarAtributos() {
    const campoTexto = document.getElementById('campoTexto');

    campoTexto.value = 'Novo valor alterado';

    campoTexto.setAttribute('placeholder', 'Digite algo novo...');
    campoTexto.setAttribute('disabled', 'true');
}

function alternarClasse() {
    const paragrafo = document.getElementById('paragrafo');
    paragrafo.classList.toggle('destaque');
}

function limparInput() {
    const campoTexto = document.getElementById('campoTexto');

    campoTexto.removeAttribute('disabled');
    campoTexto.value = '';
}

function adicionarItem() {
    const lista = document.getElementById("lista");
    const input = document.getElementById("novoItem");

    if (input.value.trim() === "") {
        return;
    }
    const novoLi = document.createElement("li");
    const textoLi = document.createTextNode(input.value);
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.addEventListener("click", function (){
        novoLi.remove();
    });
    novoLi.appendChild(textoLi);
    novoLi.appendChild(botaoRemover);
    lista.appendChild(novoLi);
    input.value = "";
}