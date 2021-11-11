const h1 = document.querySelector('h1'); //se captura el h1 como un objeto

console.log('h1 %O', h1); //se puede oservar que propiedades tiene el objeto y que metodos se puede aplicar

h1.textContent = 'TEXTO MODIFICADO DESDE JS';
h1.style.color = 'red';
h1.style.fontSize = '50px';
h1.style.fontSize = '50px';
h1.style.background = 'orange';

h1.onclick = function () {
  this.style.fontSize = `${
    Number(this.style.fontSize.replace('px', '')) + 10
  }px`;
};

h1.onmouseenter = function () {
  console.log('entra');
  this.style.backgroundColor = 'pink';
};

h1.onmouseout = function () {
  console.log('sale');
  this.style.backgroundColor = 'orange';
};

h1.innerHTML = "<a href='https://google.com'>agregar html</a>";
h1.setAttribute('class', 'hola hola2');//se agrega atributo
h1.setAttribute('id', 'hola hola2');
h1.removeAttribute('id'); //se remueve el atributo id
h1.removeAttribute('class');//se remueve el atributo class
console.log('h1 getAtributte', h1.getAttribute('style'));
console.log('h1 clientWidth', h1.clientWidth)
console.log('h1 clientHeight', h1.clientHeight)

function SubmitForm() {
  let form = document.querySelector('form'); //con esto se captura el formulario
  const inpName = document.querySelector('.js_name');  //aqui se captura el primer input
  const inpLastname = document.querySelector('.js_lastname');  //aqui se captura el segundo input
  const inpPassword = document.querySelector('.js_password');

  form.onsubmit = function (event) {   //con esto se controla el envio de formulario,el onsubmit es cuando se dispara la accion de disparar
    event.preventDefault();  //el event hace que no se actualice la pagina cuando se presiona enviar
    console.log('nombre', inpName.value);  //se accede al valor que se envio
    console.log('nombre', inpLastname.value);
    console.log('nombre', inpPassword.value);
  };
}

SubmitForm();
// getElementById - captura por id
const h2 = document.getElementById('h2');
console.log('h2', h2);

// getElementByTagName - captura por tag (etiqueta)
const links = document.getElementsByTagName('a');
console.log('links', links);
for (let index = 0; index < links.length; index++) {
  links[index].style.color = 'white';
  links[index].style.display = 'block';
  links[index].style.padding = '20px';
}

// querySelector
const titulo = document.querySelector('h1'); //captura el primer elemento h1
console.log('titulo', titulo);

// querySelectorAll - me entrega una coleccion de items
const lists = document.querySelectorAll('li');  //captura todos los elementos li
for (let index = 0; index < lists.length; index++) {
  lists[index].style.color = 'white';
  lists[index].style.backgroundColor = 'purple';
}

/*
SELECTORES RELATIVOS
*/
// CHILDNODES
const ul = document.querySelector('ul');
// CHILDNODES
console.log('CHILDNODES', ul.childNodes); //te da los elementos hijos ,incluido los espaciados y elementos en blanco
// Children
console.log('Children', ul.children); //te da todos los hijos,en este caso todos los li.
// First Child
console.log('FirstChild', ul.firstChild);//te devuelve el primer hijo,en este caso el espacio en blanco
// firstElementChild
console.log('firstElementChild', ul.firstElementChild); //te devuelve la primera etiqueta,en este caso el primer li
// lastChild
console.log('lastChild', ul.lastChild);//te devuelve el ultimo hijo
// lastElementChild
console.log('lastElementChild', ul.lastElementChild); 
// nextElementSibling
console.log(
  'nextElementSibling',
  ul.firstElementChild.nextElementSibling.nextElementSibling  //nextelementsibling te captura el elemento que sigue,en este caso se captura el tercer li.
);
// previousElementSibling
console.log(
  'previousElementSibling',
  ul.lastElementChild.previousElementSibling //el previus te entrega el anterior elemento.
);

// parent
console.log('parent', ul.parentElement); //te captura al padre del elemento,en este caso captura al body.
console.log('parent', ul.firstElementChild.parentElement); //te captura el ul.

// closest
console.log('parent', document.querySelector('a').closest('body'));//con closest te lleva al ancestro que le indicas,en este caso te lleva al body
console.log(
  'parent',
  document.querySelector('a').closest('body').querySelector('form')
);