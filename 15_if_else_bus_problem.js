// problema mostra um ônibus com n passageiros, lotação máxima do ônibus é l
// na próxima parada, s pessoas vão sair e e pessoas vão tentar entrar
//o programa deve imprimir na saída a lotação final do ônibus caso todos os passageiros caibam nele
//caso contrário o programa deve imprimir a quantidade excedente de passageiros que não caberá no ônibus

var n = input(); 
var l = input(); 
var s = input(); 
var e = input(); 

if (n-s+e>=l) {
    output(n - s + e); 
} 
else {
    output(n - s + e - l); 
}
