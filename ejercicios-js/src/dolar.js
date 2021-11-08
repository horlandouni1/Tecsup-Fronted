let dolar= 4.02;
(function(){
    function dolar(soles){
        let dolarCalculado=(soles/4.02).toFixed(3);

        alert(`La cantidad en dolares es : ${dolarCalculado} dolares`);
    }
    let soles=parseFloat(prompt('ingresa la cantidad en soles: '));
    dolar(soles);
})();