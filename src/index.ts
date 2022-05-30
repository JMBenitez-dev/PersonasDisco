let cantPersonas: number[] = new Array(270);
let menores21: number = 0;
let mayores21: number = 0;

function getRndInteger(min, max : number): number {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

for (let indice = 0; indice < cantPersonas.length; indice++) {
  
  cantPersonas[indice] = getRndInteger(19,40);
  if (cantPersonas[indice] < 21) {
    menores21++;
    
  } else{
    mayores21++;
  } 
}

console.log("Total de Personas ",cantPersonas.length);
console.log("Total de personas menores a 21 ",menores21);
console.log("Total de personas mayores a 21 ",mayores21);
//esta bien tu solucion, recordá que comentar el codigo y la prolijidad es parte de las buenas practicas.
