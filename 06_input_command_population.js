// código que simula cálculo de habitantes em uma cidade 

var domicilios = input(); 
var percentual_domicilios_3 = input(); 
var percentual_domicilios_2 = input(); 
var percentual_domicilios_1 = input(); 

var populacao_total_bairro = (domicilios * percentual_domicilios_3 * 3)/100 + 
                             (domicilios * percentual_domicilios_2 * 2)/100 + 
                             (domicilios * percentual_domicilios_1 * 1)/100;

output(populacao_total_bairro);
