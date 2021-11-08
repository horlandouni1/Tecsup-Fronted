(function(){
    function salario(horas,salario_hora,dia){
        let salarioCalculado=horas*salario_hora*dia;

        alert(`El salario semanal es: ${salarioCalculado}`);
    }
    let horas=parseFloat(prompt('ingresa las horas trabajadas por dia: '));
    let salario_hora=parseFloat(prompt('ingresa el salario por hora: '));
    let dia=parseFloat(prompt('ingresa los cuantos dias a la semana trabaja: '));
    salario(horas,salario_hora,dia);
})();