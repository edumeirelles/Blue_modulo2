const pessoa = {
    nome: 'Betão',
    sobrenome: 'Einstein',
    idade: 42,

    doido: true,

    imagem_doido:'https://upload.wikimedia.org/wikipedia/en/8/86/Einstein_tongue.jpg',
    imagem_serio:'https://www.pensarcontemporaneo.com/content/uploads/2017/06/Albert_Einstein_Head.jpg'
}

const elementoNome = document.getElementById("nome");
const elementoSobrenome = document.getElementById("sobrenome");
const elementoIdade = document.getElementById("idade");
const elementoBotao = document.getElementById("alterarHumor");
const atrinutoNome = elementoBotao.getAttribute("data-nome");
const atributoSobrenome = elementoBotao.getAttribute("data-sobrenome");
const divSelect = document.querySelector("#div1");
console.log(divSelect.classList.contains('div-diferente'));
divSelect.classList.remove("div-separado")
divSelect.classList.remove("div-normal")
divSelect.classList.add("div-eduardo")
console.log(atrinutoNome);
console.log(atributoSobrenome);

elementoNome.innerText = pessoa.nome;
elementoSobrenome.innerText = pessoa.sobrenome;
elementoIdade.innerText = pessoa.idade;

function atualizarHumor(){
    pessoa.doido = !pessoa.doido;
    const elementoImagem = document.getElementById("imagem");
    const elementoHumor = document.getElementById("blocoHumor");
    

    if (pessoa.doido){
        elementoImagem.src = pessoa.imagem_doido;
        elementoHumor.innerHTML = pessoa.nome + ' tá <b>DOIDO!!!</b>';
    }
    else{
        elementoImagem.src = pessoa.imagem_serio;
        elementoHumor.innerHTML = pessoa.nome + ' tá sério...';
    }
}


atualizarHumor();

elementoBotao.addEventListener("click", atualizarHumor)

