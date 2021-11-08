(function(){
    function votaciones(){
        let edad;
        do{
            edad=parseInt(prompt(`Ingrese su edad (menor a 100) : `));
        }while((edad<0) || (edad>100));
        if (edad<18){
            alert(`Usted no puede votar en estas elecciones porque es menor de edad`);
        }else{
            alert(`Usted puede votar con normalidad`);
        }
    }
    votaciones();
})();