

function formulario(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;

  if (!nome || !sobrenome || !telefone || !email ) {
    alert('Por favor, preencha todos os campos!');
    return false;
  }

  console.log('Nome:', nome);
  console.log('Sobrenome:', sobrenome);
  console.log('E-mail:', email);
  console.log('telefone:', telefone);
}


function mostrarMenu () {
  const menu = document.getElementById('menu-li');
  
  menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "flex" : "none";
}