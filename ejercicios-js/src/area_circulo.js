const PI=3.1416;
(function(){
    function area(radio){
        let areaCalculada=PI*(radio**2);
        alert(`El area calculada del circulo es ${areaCalculada}`);
    }
    let radio=parseFloat(prompt('ingresa la medida del radio: '));
    area(radio);
})();