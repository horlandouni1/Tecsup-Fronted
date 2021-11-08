let nameOneGlobal='Fin glogal';
function fnOne(){
    let nameOne='FNone';
    let nameTwo=30;
    console.log('nameOne',nameOne);
    console.log('nameOneGlobal en fnOne',nameOneGlobal);
}

function fnTwo(){
    let nameOne='FNTwo';
    let nameTwo=30;
    console.log('nameOne',nameOne);
    console.log('nameOneGlobal en fnTwo',nameOneGlobal);
}

fnOne();
fnTwo();
console.log('nameOneGlobal',nameOneGlobal);