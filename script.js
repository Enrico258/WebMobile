const modal = document.getElementById("modal");
const botoesAbrir = document.querySelectorAll(".abrirModal");
const fechar = document.getElementById("fecharModal");

botoesAbrir.forEach(botao => {
    botao.addEventListener("click", function(e) {
        e.preventDefault();
        modal.style.display = "flex";
    });
});

fechar.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});