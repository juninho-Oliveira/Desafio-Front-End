

function teste() {
  alert('pegou')
}

function formulario(event) {
  event.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)

  // Aqui você pode acessar os valores dos campos do formulário
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;

  // Faça algo com os valores dos campos (exemplo de log no console)
  console.log('Nome:', nome);
  console.log('Email:', email);

  // Adicione código para processar os dados do formulário ou realizar outras ações desejadas.
}