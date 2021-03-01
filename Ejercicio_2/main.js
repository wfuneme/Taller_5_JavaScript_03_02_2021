console.warn(`Vamos a determinar la hipotenusa de un triángulo rectángulo conocidas las longitudes de sus dos catetos. Formula: (HIP = √CATa + CATb)`);
alert(`Vamos a determinar la hipotenusa de un triángulo rectángulo conocidas las longitudes de sus dos catetos.`);
let CatA = parseInt(prompt(`Por favor digita la longitud del cateto "A" (número positivo mayor que cero)`));
let CatB = parseInt(prompt(`Por favor digita la longitud del cateto "B" (número positivo mayor que cero)`));
if(CatA<=0 || isNaN(CatA) || CatB<=0 || isNaN(CatB)){
    console.warn(`\n Has digitado al menos un dato no válido: ${CatA} y/o ${CatB} \n Recuerda que solo puedes digitar números positivos.`);
}else{
    let Hipot = Math.sqrt(Math.pow(CatA,2)+Math.pow(CatB,2));
    console.warn(`Has digitado: ${CatA} y ${CatB} \n La hipotenusa del triángulo rectángulo es ${Hipot}`);
}