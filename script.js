document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todas as seções que você deseja que apareçam com o efeito
    const sections = document.querySelectorAll("section");

    // Função para verificar e aplicar o efeito de aparição
    function handleScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Adiciona a classe 'visible' quando a seção entra no viewport
            if (sectionTop < windowHeight - 50) { // Ajuste de 50px para início suave
                section.classList.add("visible");
            }
        });
    }

    // Aplica a classe "hidden" inicialmente
    sections.forEach((section) => section.classList.add("hidden"));

    // Chama a função de scroll ao carregar e sempre que rolar a página
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Para carregar o efeito ao início da página
});
