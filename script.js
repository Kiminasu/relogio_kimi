function carregar(){
var msg = window.document.getElementById('msg');
var imagem = window.document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();
msg.innerHTML = `Agora são ${hora} horas.`;
if (hora >= 0 && hora < 12){
    imagem.innerHTML = '<img src="img/manhã.png">'
    window.document.body.style.background = '#91aa4c'
} else if (hora >= 12 && hora < 18){
    imagem.innerHTML = '<img src="img/tarde.png">'
    window.document.body.style.background = '#f3a78d'
} else{
    imagem.innerHTML = '<img src="img/noite.png">'
    window.document.body.style.background = '#0067c8'
}
}
