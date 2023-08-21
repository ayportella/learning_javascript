var investimento_inicial = 100000; //quanto a pessoa tem no inicio
var taxa_rendimento = 0.2; // percentual de rendimento
var taxa_imposto = 0.3;  //percentual de imposto

// a pessoa ganha um percentual sobre o que investiu
var rendimento_bruto = investimento_inicial * taxa_rendimento

// a pessoa paga um percentual do que ganhou (imposto)
var imposto_a_pagar = rendimento_bruto * taxa_imposto;

// o que sobra dos ganhos após pagar imposto
var rendimento_liquido = rendimento_bruto - imposto_a_pagar;

var montante_final = investimento_inicial + rendimento_liquido

output(montante_final);
