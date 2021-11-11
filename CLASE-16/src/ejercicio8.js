const inputName=document.querySelector('.js_name');
const inputLastname=document.querySelector('.js_lastname');
const inputPhone=document.querySelector('.js_phone');
const inputAddress=document.querySelector('.js_address');
const inputPhoto=document.querySelector('.js_photo');
const inputNickname=document.querySelector('.js_nickname');
const form=document.querySelector('form');
const app=document.getElementById('app');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const article=document.createElement('article');
    article.innerHTML=`
    <img src=${inputPhoto.value} alt="${inputName.value} ${inputLastname.value}"/>
    <h2>${inputName.value} ${inputLastname.value}</h2>
    <h3>${inputNickname.value}</h3>
    <div><span><img src="./imagenes/icons/phone.svg" alt=""></span><h4><a href="tel:+${inputPhone.value}">${inputPhone.value}</a></h4></div>
    <div><span><img src="./imagenes/icons/house.svg" alt=""></span><h4>${inputAddress.value}</h4></div>
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
