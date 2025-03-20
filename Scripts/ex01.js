// console.log('Olá mundo!');


/*
var n1 = 5;
var n2 = 10;

var soma = n1+n2;

console.log(soma);

n1 = "a";

soma = n1 * n2;


if(soma)
    console.log(soma);
else
    console.log('Erro de cálculo');

*/

// console.log("37" - 7);
// console.log("37" + 7);


const total = 10;
let soma = 0;
let msg = "Soma dos números \n";
for(var i = 0; i< total; i++){
    soma += i;
    msg += i + " + ";
 }
msg = msg.substring(0, msg.length-2)+" = ";
console.log(msg + soma);
