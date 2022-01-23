// Ativar links para menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
    const url = location.href;
    const href = link.href;

    if(url.includes(href)){
        link.classList.add('ativo');
    }
}

links.forEach(ativarLink);

// Ativar item da página orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento)  {
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);

// Perguntas Frequentes
const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event){
    const pergunta = event.target;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle('ativa');
    if (resposta.classList.contains('ativa')) {
        pergunta.setAttribute('aria-expanded', 'true');
    } else {
        pergunta.setAttribute('aria-expanded', 'false');
    }
}

function clicarPergunta(pergunta){
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(clicarPergunta);

// Galeria de bicicletas
const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event){
    const img = event.currentTarget;
    if (matchMedia('(min-width: 920px)').matches) {
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img){
    img.addEventListener('click', trocarImagem);      
}

galeria.forEach(eventosGaleria);

// Animação do menu
if (window.SimpleAnime) {
    new SimpleAnime();
}