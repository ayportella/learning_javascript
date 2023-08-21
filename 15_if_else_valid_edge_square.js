// programa indica =1 se o valor da aresta inputado for menor que 0


var aresta = input(); 
var comando = input(); 
var resultado = 0; 

if (aresta<=0) {
resultado = -1 
} 
else {
    if (comando === 0) {
        resultado = aresta*4 
        } 
    if (comando ===1) {
        resultado = aresta * aresta 
        } 
    } 

output(resultado);
