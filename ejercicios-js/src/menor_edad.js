(function(){
    function menor_edad(año_nacimiento){
        let fecha=new Date();
        let edadCalculada=fecha.getFullYear()-año_nacimiento;
        alert(`La edad actual es ${edadCalculada}`);
    }
    let año_nacimiento=parseFloat(prompt('ingresa el año que naciste: '));
    edad(año_nacimiento);
})();