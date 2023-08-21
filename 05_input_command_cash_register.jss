//esse código simula uma caixa registradora

var p1 = input(); var qtde_p1 = input(); 
var p2 = input(); var qtde_p2 = input(); 
var p3 = input(); var qtde_p3 = input(); 
var p4 = input(); var qtde_p4 = input(); 

var custo_total_p1 = p1 * qtde_p1; 
var custo_total_p2 = p2 * qtde_p2; 
var custo_total_p3 = p3 * qtde_p3; 
var custo_total_p4 = p4 * qtde_p4; 

var custo_acumulado1 = custo_total_p1 + custo_total_p2;
var custo_acumulado2 = custo_acumulado1 + custo_total_p3;
var custo_acumulado3 = custo_acumulado2 + custo_total_p4 output(custo_total_p1); 

output(custo_acumulado1); output(custo_acumulado2); output(custo_acumulado3);
