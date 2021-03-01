console.warn(`Vamos a determinar el Área y Volumen de un cilindro, conociendo su altura y su radio.`);
console.log(`Área del cilindro = 2πr(h+r). Donde "h" es la altura y "r" es el radio.`)
console.log(`Volumen del cilindro = πh(r^2). Donde "h" es la altura y "r" es el radio.`)
alert(`Vamos a determinar el Área y Volumen de un cilindro, conociendo su altura y su radio.`);
let Altura = parseInt(prompt(`Por favor digita el valor de la altura (número positivo mayor que cero)`));
let Radio = parseInt(prompt(`Por favor digita el valor del radio (número positivo mayor que cero)`));

if(Altura<=0 || isNaN(Altura) || Radio<=0 || isNaN(Radio)){
    console.warn(`\n Has digitado al menos un dato no válido: ${Altura} y/o ${Radio} \n Recuerda que solo puedes digitar números positivos.`);
}else{
    let Area = 2*Math.PI*Radio*(Altura+Radio);
    let Volumen = Math.PI*Altura*Math.pow(Radio,2);
    console.warn(`Has digitado: ${Altura} y ${Radio} \n El área del cilindro es ${Area}. \n El volumen del cilindro es ${Volumen}`);
}