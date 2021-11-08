(function(){
    function area(a,b){
        let areaCalculada=a*b;
        alert(`El area calculada del rectangulo es ${areaCalculada}`);
    }
    let a=parseFloat(prompt('ingresa la medida del primer lado: '));
    let b=parseFloat(prompt('ingresa la medida del segundo lado: '));
    area(a,b);
})();