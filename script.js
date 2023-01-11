function carregar(){
var msg = window.document.getElementById('msg');
var imagem = window.document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();
msg.innerHTML = `Agora são ${hora} horas.`;
if (hora >= 0 && hora < 12){
    imagem.src = "/Projeto_01/Modelo/img/manhã.png";
    window.document.body.style.background = '#91aa4c'
} else if (hora >= 12 && hora < 18){
    //imagem.innerHTML = '<img src="/Projeto_01/Modelo/img/tarde.png">'
    imagem.src = "/Projeto_01/Modelo/img/tarde.png";
    window.document.body.style.background = '#f3a78d'
} else{
    imagem.src = "/Projeto_01/Modelo/img/noite.png";
    window.document.body.style.background = '#0067c8'
}
}