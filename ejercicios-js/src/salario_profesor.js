(function(){
    function salario_profesor(){
        let salario_inicial=1500;
        let salarios=[];
        for(var i=0;i<6;i++){
            salario_inicial=(salario_inicial*110/100).toFixed(2);
            salarios.push(salario_inicial);
        }
        for(i=0;i<6;i++){
            alert(`El salario en el año ${i+1} es: ${salarios[i]}`)
        }
    }
    salario_profesor();
})();