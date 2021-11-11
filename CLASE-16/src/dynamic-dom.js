const inputName=document.querySelector('.js_name');
const inputLastname=document.querySelector('.js_lastname');
const inputAge=document.querySelector('.js_age');
const inputPhoto=document.querySelector('.js_photo');
const form=document.querySelector('form');
const app=document.getElementById('app');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const article=document.createElement('article');
    article.innerHTML=`
    <h2>Nombre completo: ${inputName.value} ${inputLastname.value}</h2>
    <h2>Edad: ${inputAge.value}</h2>
    <figure>
        <img src=${inputPhoto.value} alt="${inputName.value} ${inputLastname.value}"/>
    </figure>
    <button>X</button>
    `
    article.classList.add('card');
    article.querySelector('button').onclick=function(){
        const flag=confirm('Estas seguro que deseas eliminar la tarjeta?');
        if (flag) app.removeChild(article);  //aqui remueve si presionamos aceptar
        //if (flag) article.remove()
    }
    app.appendChild(article);
    this.reset();
})