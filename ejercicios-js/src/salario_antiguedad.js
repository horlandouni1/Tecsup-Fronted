(function(){
    function salario_antiguedad(){
        let antiguedad= parseInt(prompt(`Ingresa cuantos años llevas trabajando: `));
        switch (antiguedad){
            case 1:
                alert(`Tu salario sera $100`);
                break;
            case 2:
                alert(`Tu salario sera $200`);
                break;
            case 3:
                alert(`Tu salario sera $300`);
                break;
            case 4:
                alert(`Tu salario sera $400`);
                break;
            case 5:
                alert(`Tu salario sera $500`);
                break;
            default:
                alert(`debes introducir un numero entre 1 y 5`);
                break;
        }
    }
    salario_antiguedad();
})();