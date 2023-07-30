let nome, ano, idade;
let saida = false;

do{
    nome = window.prompt('Digite seu nome:');
    ano = parseInt(window.prompt('Informe seu ano de nascimento:'));
    
    if (ano >= 1992 && ano <= 2021 && nome != '' && typeof ano == 'number'){
        idade = 2022 - ano;
        
        alert(`Olá ${nome}, sua idade em 2022 foi ${idade} `)
        
        saida = true
    }else{
        alert('Dados inválidos, por favor tente novamente.')
    }
}while(saida == false)