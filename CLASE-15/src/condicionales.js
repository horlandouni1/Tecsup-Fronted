const AGE_MAX=18;
const SEX='m';

function Welcome(name){
    return `Bienvenido al bar ${name}`;
}
function noWelcome(name){
    return `No eres bienvenido al bar ${name}`;
}
function notSupportAge(name){
    return `Eres menor para entrar al bar ${name}`;
}
function Elbar(){
    let name= prompt(`Ingresa tu nombre: `);
    let age=Number(prompt(`Ingresa tu edad: `));
    let sex=prompt(`ingresa tu sexo: `);
    if (age>AGE_MAX && sex.toLocaleLowerCase()==SEX){
        alert(Welcome(name));
    } else if (age<AGE_MAX){
        alert(notSupportAge(name));
    }else{
        alert(noWelcome(name));
    }
}
//Elbar();
function flavorChoose(flavor){
    return `Usted escogio ${flavor} `;
}
function flavorNotFound(flavor){
    return `El sabor ${flavor} no lo tenemos aun`;
}

function LaHeladeria(){
    let flavor=prompt(`Ingresa el valor que quieras (fresa,melon,sandia,kiwi)`).toLocaleLowerCase();
    switch(flavor){
        case `fresa`:{
            alert(flavorChoose(flavor));
            break;
        }
        case `melon`:{
            alert(flavorChoose(flavor));
            break;
        }
        case `sandia`:{
            alert(flavorChoose(flavor));
            break;
        }
        case `naranja`:{
            alert(flavorChoose(flavor));
            break;
        }
        case `kiwi`:{
            alert(flavorChoose(flavor));
            break;
        }
        default:{
            alert(flavorNotFound(flavor));
            break;
        }

    }
    alert(`Vuelva pronto !!!`);
}
//LaHeladeria();

function suma(a,b){
    if(arguments.length>2) throw console.error(`No soporta mas de dos argumentos`);
    return a+b;
}
//suma(2,3,4)
//console.log('acaaa')

function saveName(name) {
    let message=``;
    try{
        if(name.length<6) throw `SHORT`;
        if(name.length>10) throw `LARGE`;
        message=`El nombre ${name} es correcto`;
    }catch(err){
        if(err===`SHORT`){
            message=`El nombre ${name} es muy corto`
        };
        if(err===`LARGE`){
            message=`El nombre ${name} es muy largo`
        };
    }finally{
        console.log(`Nombre evaluado: `, message);
    }

}
saveName(`ana`);
saveName(`luis`);
saveName(`pedro`);
saveName(`sebastian`);
