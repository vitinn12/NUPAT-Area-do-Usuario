
// funcao para deslizar a tela  ate o icinio da pagina

function subiraoTopo (){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'   
    })
}


// tema dark

function mudarTema(tipoTema) {

    const corpo_principal_section = document.querySelectorAll('.corpo_principal .container section a , .corpo_principal article  ');
    const corpo_principal_article = document.querySelectorAll('.corpo_principal .container article, .container article main .dados p input');
    const rodape1 = document.querySelectorAll ('.primeiro-rodape, .voltar-ao-topo a, .voltar-ao-topo i, .primeiro-txt a, .segundo-txt a, .dados-icons, .dados-icons i');
    const imagemrodape = document.querySelectorAll ('footer .img-logo #logo-nupat');
    const cabeçalhofundo = document.querySelectorAll('.cbc-acessibilidade, .submenu, .submenu ul li ul')
    const cabeçalhotext = document.querySelectorAll ('.cbc-acessibilidade a, .cbc-acessibilidade li nav ul, .submenu ul li p, .submenu ul li ul li a')
    const cabeçalhoicon = document.querySelectorAll ('.cbc-acessibilidade li nav ul li, .icons-contraste a')

    if (tipoTema === 'claro') {
        document.body.style.backgroundColor = '';
        document.body.style.transition = '0.5s ease'; 

        corpo_principal_section.forEach (sectioncor =>{
            sectioncor.style.color ='';

        });

        corpo_principal_article.forEach(articlecor =>{
            articlecor.style.backgroundColor = ''; 
            articlecor.style.color = '';
        });

        rodape1.forEach (rodapecor =>{
            rodapecor.style.color = '';
            rodapecor.style.backgroundColor = '';
        });

        imagemrodape.forEach (imagemrodape =>{
            imagemrodape.src = 'img/icon_u.webp';
        });

        cabeçalhofundo.forEach (item =>{
            item.style.backgroundColor = '';
            item.style.color = '';
            item.style.transition = '0.5s ease  '; 
        });

        cabeçalhoicon.forEach (item => {
            item.style.border = '';
            item.style.backgroundColor = '';
            item.style.color = '';
        });
        
        cabeçalhotext.forEach (item =>{
            item.style.color =  '';
        });


        localStorage.setItem('tema', 'claro');
    }

    if (tipoTema === 'escuro') {
        document.body.style.backgroundColor = '#212121';

        corpo_principal_section.forEach (sectioncor =>{
            sectioncor.style.color = 'white';
        });

        corpo_principal_article.forEach(articlecor =>{
            articlecor.style.backgroundColor = '#2e2e2e';
            articlecor.style.color = 'white';
        });

        rodape1.forEach (rodapecor =>{
            rodapecor.style.color = 'white';
            rodapecor.style.backgroundColor = '#2e2e2e';
        });

        imagemrodape.forEach (imagemrodape =>{
            imagemrodape.src = 'img/icon_uu.webp';
        });

        cabeçalhofundo.forEach (item =>{
            item.style.backgroundColor = '#2e2e2e';
            item.style.color = 'white';
            item.style.transition = '0.5s ease'; 
        });

        cabeçalhoicon.forEach (item => {
            item.style.border = '1px solid white';
            item.style.backgroundColor = '#2e2e2e';
            item.style.color = 'white';
        });

        cabeçalhotext.forEach (item =>{
            item.style.color =  'white';
        });

        localStorage.setItem('tema', 'escuro');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo) {
        mudarTema(temaSalvo);
    }
});


// função da acessibilidade (aumentar a fonte)

var tamanho_padrao = 16;
var tamanho_maximo = 19; 
var tamanho_minimo = 14; 
var tamanho_fonte = tamanho_padrao;

function atualizarTamanhoFonte() {
    if (tamanho_fonte >= tamanho_maximo) {
        document.querySelector(".sb-ab-ft-maior").style.cursor = "no-drop";
    } else {
        document.querySelector(".sb-ab-ft-maior").style.cursor = "pointer";
    }
    
    if (tamanho_fonte <= tamanho_minimo) {
        document.querySelector(".sb-ab-ft-menor").style.cursor = "no-drop";
    } else {
        document.querySelector(".sb-ab-ft-menor").style.cursor = "pointer";
    }
}

document.querySelector(".sb-ab-ft-maior").addEventListener("click", function(){
    if (tamanho_fonte < tamanho_maximo) {
        tamanho_fonte++;
        document.body.style.fontSize = tamanho_fonte + "px";
        atualizarTamanhoFonte();
    }
});

document.querySelector(".sb-ab-ft-menor").addEventListener("click", function(){
    if (tamanho_fonte > tamanho_minimo) {
        tamanho_fonte--;
        document.body.style.fontSize = tamanho_fonte + "px";
        atualizarTamanhoFonte();
    }
});

document.querySelector(".sb-ab-ft-normal").addEventListener("click", function(){
    tamanho_fonte = tamanho_padrao;
    document.body.style.fontSize = tamanho_padrao + "px";
    atualizarTamanhoFonte();
});




