let listaEntrevistados = [];

function menu(){
    let n = prompt("Selecione uma das opções: \n 1- Cadastrar entrevistado\n 2- Lista de entrevistados\n 3- Encerrar")

    switch(n){
        case "1":
            calculoImc();
            break;
        case "2":
            imprimeLista();
            break;
        case "3":
            document.write("Programa encerrado.");
            break;
        default:
            alert("Opção inválida");
            break;
    }
    return n;
}

function calculoImc(){
let pessoa={}
pessoa.nome = prompt('Informe seu nome:');
pessoa.peso = prompt('Informe seu peso (em Kg):');
pessoa.altura = prompt('Informe sua altura (em metros): ');
pessoa.imc = pessoa.peso/(pessoa.altura*pessoa.altura);
let cat;

if (pessoa.imc < 18.5){
    cat = "adulto com baixo peso";
}else if (pessoa.imc >= 18.5 && pessoa.imc < 25){
    cat = "adulto com peso ideal";
}else if (pessoa.imc >= 25 && pessoa.imc < 30){
    cat = "adulto com sobrepeso";
}else if (pessoa.imc >= 30){
    cat = "adulto com obesidade";
}

console.log("Nome: " + pessoa.nome + " | IMC = " + pessoa.imc + " | Situção: " + cat);
listaEntrevistados.push(pessoa);
}

function imprimeLista(){
    console.table(listaEntrevistados)
}