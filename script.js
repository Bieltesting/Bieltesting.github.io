const botaoSeguir = document.getElementById("botao-seguir");
const linkBloqueado = document.getElementById("link-bloqueado");
const linkDesbloqueado = document.getElementById("link-desbloqueado");

botaoSeguir.addEventListener("click", function() {
  linkBloqueado.style.display = "none";
  linkDesbloqueado.style.display = "block";
});
