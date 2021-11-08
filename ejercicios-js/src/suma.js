(function(){  //con esto de aqui se proteje la funcion ,es decir desde otro documento ya no se podra acceder a esta funcion.
    let a=parseFloat(prompt('ingresa el primer numero: '));
    let b=parseFloat(prompt('ingresa el segundo numero: '));
    function suma(a,b){
        sumaa=a+b;
        alert(`La suma de lo numeros es ${sumaa}`);
    }
    //suma(a,b);
})();