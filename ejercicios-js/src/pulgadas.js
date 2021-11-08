(function(){
    function pulgadas(metros){
        let pulgadasCalculado=(metros/0.0254).toFixed(3);

        alert(`La medida en pulgadas es : ${pulgadasCalculado} pulgadas`);
    }
    let metros=parseFloat(prompt('ingresa la medida en metros: '));
    pulgadas(metros);
})();