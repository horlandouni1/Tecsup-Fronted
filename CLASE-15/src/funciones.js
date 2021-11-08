function sumar(a,b){
    return a+b;
}
function restar(a,b){
    return a-b;
}
console.log(sumar(3,4))
console.log(sumar(1,2))
console.log(sumar(3,5))
console.log(sumar(3,0))

(function(){  //con esto de aqui se proteje la funcion ,es decir desde otro documento ya no se podra acceder a esta funcion.
function calculadora(){
    let a=parseFloat(prompt('ingresa el primer numero: '));
    let b=parseFloat(prompt('ingresa el segundo numero: '));
    console.log('sumar a + b : ',sumar(a,b));
    console.log('restar a + b : ',restar(a,b));
}
calculadora();
})();