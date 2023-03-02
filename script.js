const botaoSeguir = document.getElementById("botao-seguir");
const compartilhar = document.getElementById("botao-compartilhar")
const linkBloqueado = document.getElementById("link-bloqueado");
const linkDesbloqueado = document.getElementById("link-desbloqueado");

if (document.cookie.indexOf("botaoDesbloqueado=true") !== -1) {
  compartilhar.style.display = "block";
}

botaoSeguir.addEventListener("click", function() {
  compartilhar.style.display = "block";
  document.cookie = "botaoDesbloqueado=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  
});

compartilhar.addEventListener("click", function() {
  linkBloqueado.style.display = "none";
  linkDesbloqueado.style.display = "block";
})

//Adicione um ouvinte de evento ao botão "compartilhar"
compartilhar.addEventListener('click', function() {
  //Obtenha a URL atual da página
  const url = window.location.href;

//Crie a URL do WhatsApp com a mensagem desejada
const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`Venha se tornar Promoter você também: ${url}`)}`;

//Abra a URL do WhatsApp em uma nova janela
window.open(whatsappUrl);
});
