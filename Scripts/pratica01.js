var a = 2;
var b = 4;
var c = 3;

if(a + b > c && a + c > b && b + c > a){
    if(a == b && b == c){
        console.log('Triangulo Equilátero');
    }else if (a != b && b != c && a != c){
        console.log('Triangulo Escaleno');
    }else{
        console.log('Triangulo Isósceles');
    } 
}else{
    console.log('Não é um triangulo');
}