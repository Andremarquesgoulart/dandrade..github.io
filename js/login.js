$(document).ready(function() {
  $('#cpf').inputmask('999.999.999-99');
  
  const inputs = document.querySelectorAll('.box-form input');

  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.previousElementSibling.style.top = '-20px';
      input.previousElementSibling.style.fontSize = '12px';
      input.previousElementSibling.style.color = '#000';
    });

    input.addEventListener('blur', () => {
      if (input.value === '') {
        input.previousElementSibling.style.top = '10px';
        input.previousElementSibling.style.fontSize = '16px';
        input.previousElementSibling.style.color = '#ccc';
      }
    });
  });

  $("#myForm").submit(function(e) {
    // Validando o campo nome
    var nameInput = $("#name").val();
    if (nameInput === '') {
      alert("Por favor, preencha o campo nome.");
      e.preventDefault();
      return;
    } else if (nameInput.length < 10) {
      alert("Nome incompleto. Por favor, preencha o campo nome corretamente.");
      e.preventDefault();
      return;
    }
    
    // Validando o campo cpf
    var cpfInput = $("#cpf").val().replace(/\D/g, '');
    if (cpfInput.length !== 11 || !validateCPF(cpfInput)) {
      alert("Por favor, preencha o campo CPF corretamente.");
      e.preventDefault();
      return;
    }
  });
  
  function validateCPF(cpf) {
    var sum = 0;
    var rest;
    if (cpf == "00000000000") {
      return false;
    }
    for (i=1; i<=9; i++) {
      sum = sum + parseInt(cpf.substring(i-1, i)) * (11 - i);
    }
    rest = (sum * 10) % 11;
    if ((rest == 10) || (rest == 11)) {
      rest = 0;
    }
    if (rest != parseInt(cpf.substring(9, 10))) {
      return false;
    }
    sum = 0;
    for (i = 1; i <= 10; i++) {
      sum = sum + parseInt(cpf.substring(i-1, i)) * (12 - i);
    }
    rest = (sum * 10) % 11;
    if ((rest == 10) || (rest == 11)) {
      rest = 0;
    }
    if (rest != parseInt(cpf.substring(10, 11))) {
      return false;
    }
    return true;
  }

  // adiciona o evento click ao link
  $("#cadastro-link").click(function(event) {
    event.preventDefault(); // previne o comportamento padrão do link
    
    // abre o popup com as dimensões definidas
    var popup = window.open("cadastro.html", "popup", "width=400,height=400");
    
    // adiciona um botão de fechar ao popup
    var closeButton = document.createElement("button");
    closeButton.textContent = "Fechar";
    closeButton.addEventListener("click", function() {
      popup.close();
    });
    popup.document.body.appendChild(closeButton);
  });
});
