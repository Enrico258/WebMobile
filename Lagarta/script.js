const modal = document.getElementById("modal");
const botoesAbrir = document.querySelectorAll(".abrirModal");
const fechar = document.getElementById("fecharModal");

if (modal) {

    // Abrir modal
    botoesAbrir.forEach(botao => {
        botao.addEventListener("click", function(e) {
            e.preventDefault();
            modal.classList.add("ativo");
        });
    });

    // Fechar modal
    fechar.addEventListener("click", function() {
        modal.classList.remove("ativo");
    });

    // Fechar clicando fora
    window.addEventListener("click", function(e) {
        if (e.target === modal) {
            modal.classList.remove("ativo");
        }
    });
}