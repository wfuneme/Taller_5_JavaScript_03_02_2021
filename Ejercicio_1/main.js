console.warn(`Sumatoria de numeros enteros comprendidos entre el 1 y el 10`);
let n = 0;
let flag = prompt(`Voy a sumar los numeros del 1 al 10 \n Para ver el resultado paso a paso, Presiona 1. De lo contrario presiona cualquier tecla o botón)`);
for (let i = 1; i < 11; i++) {
    if (flag==1){
        console.log(`cuando i = ${i}, tenemos: suma acumulada: ${n} + ${i} = ${n+i}`);
        n += i;
    }else{
        if(i==10){
            console.log(`Suma acumulada = ${n+i}`);
        }
        n += i;
    } 
 }