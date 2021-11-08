(function(){
    function aprobados(){
        let cantidad=parseInt(prompt(`Ingrese la cantidad de alumnos: `));
        let notas=[];
        for (var i=0;i<cantidad;i++){
            let nota=parseInt(prompt(`Ingrese la nota del alumno ${i+1}:`));
            notas.push(nota);
        }
        const nota_aprobado=10;
        let cantidad_aprobados=0;
        let cantidad_desaprobados=0;
        for(var i=0;i<cantidad;i++){
            if(notas[i]<10){
                cantidad_desaprobados+=1;
            }else{
                cantidad_aprobados+=1;
            }
        }
        alert(`La cantidad de aprobados es ${cantidad_aprobados} y la cantidad de desaprobados es ${cantidad_desaprobados}`);
    }
    aprobados();
})();