const users=[
    {
        name:'sebastian',
        last_name:'yabiku',
        age:34,
    },
    {
        name:'jose',
        last_name:'Perez',
        age:43,
    },
    {
        name:'Maria',
        last_name:'Paredes',
        age:45,
    },
    {
        name:'Horlando',
        last_name:'Espinoza',
        age:23,
    },
    {
        name:'Alex',
        last_name:'Quiroz',
        age:24,
    },
]
function esMayor(edad){
    return edad>30;
}
for (let i=0; i<users.length;i++){
    console.log(`index element ${i} ${esMayor(users[i].age)}`);
}
const number=[
    [0,1,2,3,4,5,6],
    [0,1,2,3,4],
];
for(i=0;i<number.length;i++){
    console.log(number[i]);
    for(let j=0;j<number[i].length;j++){
        console.log('array of array',number[i][j]);
    }
}
// WHILE
let n = 0;
while (n < 3) {
  n++;
  console.log('hasta que la condicio nse cumpla');
}

// DO WHILE
do {
  console.log('al menos una sola vez');
} while (false);

// BREAK
for (let index = 0; index < 10; index++) {
  console.log('index', index);

  if (index >= 4) break;
}

// CONTINUE
for (let index = 0; index < 10; index++) {
  if (index == 4 || index == 5 || index == 6) continue;
  console.log('continue', index);
}

// FOR IN
const perro = {
  raza: 'doberman',
  edad: 3,
  color: 'negro',
  altura: '80cm',
  pais: 'peru',
};

for (const key in perro) {
  console.log('key', key);
  console.log('value', perro[key]);
}