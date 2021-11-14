const inputHomework=document.querySelector('.js_homework');
const add=document.querySelector('.js_add');
const form=document.querySelector('form');
const app=document.getElementById('container-homeworks');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const div=document.createElement('div');
    div.innerHTML=`
        <button class="js_remove"><img src="./imagenes/icons/tacho.svg" alt=""></button>
        <input type="checkbox" class="check">
        <h3>${inputHomework.value}</h3>
    `
    div.classList.add('container-homework');
    div.querySelector('.js_remove').onclick=function(){
        const flag=confirm('Estas seguro que deseas eliminar la tarea?');
        if (flag) app.removeChild(div);  //aqui remueve si presionamos aceptar
        //if (flag) article.remove()
    }
    app.appendChild(div);
    this.reset();
})
console.log(form);
