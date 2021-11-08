let nombre = "Horlando";
let apellido;
let edad = 32;
console.log(nombre);
console.log(apellido);
apellido = "Espinoza";
console.log(apellido);

//constantes
const PI = 3.1416;
console.log(PI);
//PI = 2; //aqui dara error ya que ya esta definido pi como constante.

/*TIPOS DE DATOS */

let name = "Senas"; //string
let age = 23; //number
let isMan = true; //boliano
let isMan2 = false;
let account = null; //null
let married; //undefined
let hash = Symbol("123456"); //symbol
let alumno = {
  sexo: "f",
  edad: 35,
  grado: 5,
}; //object

/* para ver el tipo de dato se usa typeof */
console.log(name, typeof name);
console.log(age, typeof age);
console.log(isMan, typeof isMan);
console.log(isMan2, typeof isMan2);
console.log(account, typeof account);
console.log(married, typeof married);
console.log(hash, typeof hash);
console.log(alumno, typeof alumno);

/* CAMBIAR TIPO DE DATOS*/
let age2 = 30;
let age3 = "30";
console.log(age2, typeof age2);
console.log(age2, String(age2).replace("30", 200));
console.log(age2, typeof Boolean(age2));
console.log(age3, Number(age3).toFixed(2));

