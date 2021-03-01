console.warn(`Vamos a liquidar la nómina de 50 personas.`);
let VrHora = 300000;
let TotalDevengado = 0;
let TotalDctoPension = 0;
let TotalDctoSalud = 0;
let TotalAPagar = 0;

let empleados = ['Andres','Andrea','Angel','Angela','Bernardo','Bernarda','Bertulfo','Bertulfa','Bruno','Bruna','Carlos','Carla','Celio','Celia','Cirilo','Cirila',
                 'Daniel','Daniela','Dionisio','Dionisia','Erik','Erica','Evo','Eva','Fernando','Fernanda','Ferney','Ferneya','Francisco','Francisca','Gabriel','Gabriela',
                 'Harry','Helga','Hernando','Hermione','Ivan','Ivanna','Juan','Juana','Leon','Leona','luis','luisa','Medardo','Medarda','Michael','Micaela','Pablo','Paula'];
let horas     = [50,40,55,45,56,34,50,23,45,34,47,54,36,45,54,10,33,55,44,46,54,55,43,52,10,23,32,41,14,52,35,12,14,15,12,14,15,11,45,55,65,39,49,39,38,48,38,36,34,32]
console.log(`Se cancelará la hora trabajada, a un valor de ${VrHora} por cada hora. No se reconocen recargos nocturnos ni festivos.`)
for (let i = 0; i < 50; i++) {
    let n = i+1;
    console.log(`${n}. ${empleados[i]} trabajó ${horas[i]} horas. Devengó ${horas[i]*VrHora} - Descuento Pension (4%): ${horas[i]*VrHora*0.04} - Descuento Salud (4%): ${horas[i]*VrHora*0.04} = Neto a pagar: ${horas[i]*VrHora*0.92}.`);
    TotalDevengado += horas[i]*VrHora;
    TotalDctoPension += horas[i]*VrHora*0.04;
    TotalDctoSalud += horas[i]*VrHora*0.04;
    TotalAPagar += horas[i]*VrHora*0.92;
}
console.log(`Total devengado por los empleados: ${TotalDevengado}`);
console.log(`Total descuentos por pensión: ${TotalDctoPension}`);
console.log(`Total descuentos por salud: ${TotalDctoSalud}`);
console.log(`Total Neto a pagar: ${TotalAPagar}`);
//console.log(empleados);
//console.log(horas);