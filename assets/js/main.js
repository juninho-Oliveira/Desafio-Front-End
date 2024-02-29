

function formulario(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;

  /*if para verificar se todos os campos do inpus está preenchido*/
  if (!nome || !sobrenome || !telefone || !email) {
    alert('Por favor, preencha todos os campos!');
    return false;
  }

  console.log('Nome:', nome);
  console.log('Sobrenome:', sobrenome);
  console.log('E-mail:', email);
  console.log('telefone:', telefone);
}


function mostrarMenu() {
  const menu = document.getElementById('menu-li');
  let img = document.getElementById('img');


  menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "flex" : "none";

  /*if para troca de imagem do menu*/
  if (img.getAttribute("src") == "/assets/imagens/🦆 icon _share_.png") {
    img.setAttribute("src", "/assets/imagens/🦆 icon _menu_.png");
  } else {
    img.setAttribute("src", "/assets/imagens/🦆 icon _share_.png");
  }

}