//estou buscando pela classe css
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//estou buscando pelo id
//se usar o querySelector, mesmo que tenha mais itens com a mesma class, ele
//soh pega um, mas se usar o querySelectorAll ele retorna a lista
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");
    
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    
    if (peso <= 0 || peso >= 1000) {
        tdImc.textContent = "Peso Inválido";
        //<objeto>.style serve para alterar atributos manipulados por CSS
        //para atributos com mais de um nome, usar o formado camel case
        //<objeto>.classList.add(<nome-da-classe-css>) serve para adicionar
        //uma nova classe css para a tag
        paciente.classList.add("paciente-invalido");
        //paciente.style.color = "white";
        //paciente.style.backgroundColor = "red";
    }

    if (altura <= 0 || altura >= 3.0) {
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }

    tdImc.textContent = calcularIMC(peso, altura);

    function calcularIMC(peso, altura){
        var imc = 0;
        imc = peso / (altura * altura);

        return imc.toFixed(2);
    }

}





