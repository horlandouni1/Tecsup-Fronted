(function(){
    function menor_edad(){
        let persona={};
        for (var i=0; i<3;i++){
            let nombre=prompt(`Ingresa el nombre de la persona ${i+1}: `);
            let edad=parseInt(prompt(`Ingresa el edad de la persona ${i+1}: `));
            persona[nombre]=edad;
        }
        var min = Object.entries(persona).reduce(function(prev, curr){
            return prev[1] < curr[1] ? prev : curr;
          });

        alert(`El alumno con la menor edad es :  ${min[0]}, y su edad es ${min[1]}`);
    }

    menor_edad();
})();