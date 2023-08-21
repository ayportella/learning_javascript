//código lê 2 números de entrada: a medida da aresta de um quadrado, e um comando 0 ou 1
//se o comando for 0, o programa imprime na saída o perímetro do quadrado
//se o comando for 1, o programa imprime na saída a area do quadrado

var aresta = input(); 
var comando = input(); 
var resultado = 0; 

if (comando === 0) {
    resultado = aresta *4; 
} 
else {
    resultado = aresta * aresta;
} 

output(resultado);
