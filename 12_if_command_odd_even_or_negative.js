// se o número de entrada for 0 ou positivo, o programa deve funcionar como o anterior
//ou seja, imprimir 1 para número par ou 0 para número ímpar
//caso contrário, se o número for negativo, o programa deve imprimir -1

var numero = input(); 
if (numero < 0) {
    output(-1); 
} 

if (numero >= 0) {
    if (numero % 2 === 0) {
        output(1); 
    } 
    if (numero % 2 === 1) {
        output(0); 
    } 
}
