// código que simula se o total da compra ultrapassar 200 reais, o cliente paga o preço cheio
// caso contrário o cliente ganha desconto de 10%

var valor_compra = input(); 

if (valor_compra > 200) {
valor_compra = 0.9*valor_compra; 
} 

output(valor_compra);
