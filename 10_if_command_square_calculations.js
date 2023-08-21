// programa javascript que lê dois números da entrada, nesta ordem: o comprimento da aresta (lado) de um quadrado (número maior que zero), e um comando (0 ou 1).
// Se o comando for 0, o programa deve imprimir o perímetro do quadrado (soma das 4 arestas)
//Se o comando for 1, o programa deve imprimir a área do quadrado (aresta * aresta)


var aresta = input(); 
var comando = input(); 

// assumindo que o comando é 0
var resposta = 4 * aresta;

// caso precise, corrija
if (comando === 1) { 
  resposta = aresta * aresta; 
  } 
  
output(resposta);
