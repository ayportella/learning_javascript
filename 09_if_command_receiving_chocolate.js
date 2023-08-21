// programa que simula quantidade de bombons de joao e maria
//joao recebe bombons de maria mas só consegue carregar 8, senão ele derruba todos, ficando com zero
// esse código simula a quantidade de bombons que ele segura no início e a quantidade de bombons adicionais que ele recebe de maria
// o programa imprime a quantidade de bombons que joao terá nas mãos após receber todos os bombons de maria

var bombom_joao = input(); 
var bombom_maria = input(); 

if (bombom_joao + bombom_maria > 8) { 
  bombom_joao = 0;
}

output(bombom_joao);
