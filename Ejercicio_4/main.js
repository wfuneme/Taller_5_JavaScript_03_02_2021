console.warn(`Vamos a comparar dos numeros y ordenarlos de menor a mayor.`);
alert(`Vamos a comparar dos numeros y ordenarlos de menor a mayor.`);
let Num1 = parseInt(prompt(`Por favor digita el primer número.`));
let Num2 = parseInt(prompt(`Por favor digita el segundo número.`));

if(Num1<=0 || isNaN(Num1) || Num2<=0 || isNaN(Num2)){
    console.warn(`\n Has digitado al menos un dato no válido: ${Num1} y/o ${Num2}. \n`);
}else if (Num1<Num2){
    console.log(`Has digitado: ${Num1} y ${Num2} \n Los números ordenados de menor a mayor son: ${Num1} y ${Num2}.`);
}else if (Num1==Num2){
    console.log(`Has digitado: ${Num1} y ${Num2} \n Los números son iguales.`);
}else if (Num1>Num2){
    console.log(`Has digitado: ${Num1} y ${Num2} \n Los números ordenados de menor a mayor son: ${Num2} y ${Num1}`);
}