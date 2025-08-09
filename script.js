// Aguarda o carregamento completo do DOM para garantir que todos os elementos estejam disponíveis
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona todos os links da navegação que apontam para uma seção da mesma página
    const navLinks = document.querySelectorAll('nav ul li a');

    // Adiciona um evento de clique a cada um desses links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            
            // Previne o comportamento padrão do link, que é pular para o destino
            e.preventDefault();

            // Pega o valor do atributo 'href' do link, que é o ID da seção (ex: '#sobre')
            const targetId = this.getAttribute('href');
            
            // Encontra o elemento correspondente na página usando o ID
            const targetSection = document.querySelector(targetId);

            // Verifica se a seção existe antes de tentar a rolagem
            if (targetSection) {
                // Rola suavemente até o elemento usando a API nativa do navegador
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

});
