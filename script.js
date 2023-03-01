const botaoSeguir = document.getElementById("botao-seguir");
const compartilhar = document.getElementById("botao-compartilhar")
const linkBloqueado = document.getElementById("link-bloqueado");
const linkDesbloqueado = document.getElementById("link-desbloqueado");

botaoSeguir.addEventListener("click", function() {
  compartilhar.style.display = "block";
  
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
const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`Abriu vaga de Promoter da ZZON TENN: ${url}`)}`;

//Abra a URL do WhatsApp em uma nova janela
window.open(whatsappUrl);
});
