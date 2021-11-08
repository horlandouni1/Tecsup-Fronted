(function(){
    function focos(){
        let cantidad=parseInt(prompt(`Ingrese la cantidad de focos: `));
        let focos=[];
        for (var i=0;i<cantidad;i++){
            let foco=prompt(`Ingrese el color del foco ${i+1} (rojo,blanco,verde):`).toLocaleLowerCase();
            focos.push(foco);
        }
        let foco_verde=0;
        let foco_blanco=0;
        let foco_rojo=0;
        for(var i=0;i<cantidad;i++){
            if(focos[i]=='verde'){
                foco_verde+=1;
            }else if(focos[i]=='blanco'){
                foco_blanco+=1;
            }else{
                foco_rojo+=1;
            }
        }
        alert(`La cantidad de focos verdes es ${foco_verde} ,la cantidad de focos blancos es ${foco_blanco} y la
        cantidad de focos rojos es ${foco_rojo}`);
    }
    focos();
})();