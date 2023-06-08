Selecione todos os links que possuem o atributo data-scroll
const links = document.querySelectorAll('a[data-scroll]');

// Adicione um ouvinte de evento de clique a cada link
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // Previne o comportamento padrão de um link clicado

    const href = link.getAttribute('href'); // Obtém o valor do atributo href do link
    const target = document.querySelector(href); // Seleciona o elemento alvo com base no valor do atributo href

    target.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente para o elemento alvo
  });
});
