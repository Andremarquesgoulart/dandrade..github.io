// Seleciona todos os links de navegação
var links = document.querySelectorAll('.credor-sidebar a');

// Adiciona um manipulador de eventos de clique a cada link
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(e) {
    // Previne o comportamento padrão do link
    e.preventDefault();
    // Remove a seleção de todos os links de navegação
    document.querySelectorAll('.credor-sidebar li.active').forEach(function(li) {
      li.classList.remove('active');
    });
    // Obtém o ID da seção correspondente ao link clicado
    var targetId = this.getAttribute('href');
    // Seleciona a seção correspondente
    var targetSection = document.querySelector(targetId);
    // Seleciona todas as seções de resultados
    var sections = document.querySelectorAll('.resultados-credor section');
    // Oculta todas as seções de resultados
    for (var j = 0; j < sections.length; j++) {
      sections[j].style.display = 'none';
    }
    // Mostra a seção correspondente
    targetSection.style.display = 'block';
    // Adiciona a classe "active" ao link clicado
    this.parentNode.classList.add('active');
  });
}
