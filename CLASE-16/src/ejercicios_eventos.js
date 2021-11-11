const btn=document.querySelector('button');
btn.onclick=function(){
    alert(`Hola mundo`)
};

const btn_mostrar=document.querySelector('.mostrar');
const element=document.querySelector('div');
btn_mostrar.onclick= function(){
    if(element.style.display==='block'){
        this.textContent='mostrar elemento';
        element.style.display='none';
    }else{
        this.textContent='ocultar elemento';
        element.style.display='block';
    }
};