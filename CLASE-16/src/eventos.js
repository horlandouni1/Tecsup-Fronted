const button=document.querySelector('button');
const dropdown=document.querySelector('.js_dropdown');
const a= document.querySelector('a');
a.onclick= function(evt){
    evt.preventDefault();
    console.log('holaaa');
};
button.onclick= function(){
    if(dropdown.style.display==='block'){
        this.textContent='abrir dropdown';
        dropdown.style.display='none';
    }else{
        this.textContent='cerrar dropdown';
        dropdown.style.display='block';
    }
};

const input=document.querySelector('input[type="text"]');
console.log('input',input);
input.onkeyup =function(){
    console.log('acaa',this.value);
};
const inputCheck=document.querySelector('input[type="checkbox"]');
console.log('input',input);
input.onchange =function(){
    console.log('acaa',this.checked);
};

window.onresize=function(){
    console.log('resize',window.innerWidth,window.innerHeight);
}
const form=document.querySelector('form');
form.unsubmit=function(evt){
    evt.preventDefault();
    console.log('nombre',this.querySelector('input[placeholder="nombre"].').value);
    console.log('apellido',this.querySelector('input[placeholder="apellido"]').value);
}
function fnOne(){
    console.log('fnOne!!!');
}
function fnTwo(){
    console.log('fnTwo!!!');
}
function fnThree(){
    console.log('fnThree!!!');
}

button.addEventListener('click',fnOne);
button.addEventListener('click',fnTwo);
button.addEventListener('click',fnThree);

const btnQuit=document.querySelector('.js_quit');
btnQuit.addEventListener('click',function(){
    console.log('quitando el registro!!');
    button.removeEventListener('click',fnThree)//quita el evento
});

document.querySelector('body').addEventListener('mousemove',function(event){
    console.log(event.clientX);
    console.log(event.clientY);
    this.style.backgroundColor=`rgba(
        ${Math.floor(Math.random()*255)},
        ${Math.floor(Math.random()*255)},
        ${Math.floor(Math.random()*255)},
    )`;
});