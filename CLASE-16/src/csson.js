const h1=document.querySelector('h1');
const button=document.querySelector('button');

button.onclick=function(){
    console.log('this.textcontent',this.textContent);
    if(this.textContent=='presionado'){
        this.textContent='sin presionar';
        h1.style.border="";
    }else{
        this.textContent='presionado';
        h1.style.border="10px solid black";
    }
    this.classlist.toggle('buton-active'); //agrega clase al boton al hacer click, y tambien lo quita al hacer otro click
    h1.classList.toggle('format-title');
};