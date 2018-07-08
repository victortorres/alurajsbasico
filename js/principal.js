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

    var imc = peso / (altura * altura);
    
    tdImc.textContent = imc.toFixed(2);

}


var btnAdicionarPaciente = document.querySelector("#adicionar-paciente");
btnAdicionarPaciente.addEventListener('click', function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    //ao pegar o form da tela, se eu der um "name" para cada atributo(input)
    //da tela, eu posso pegalo pelo name, e ao passar o parametro value eu
    //pego o valor digitado
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //com esse comando eu crio uma nova tag html, e para saber qual eu passo o nome
    //da nova tag
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;    
    gorduraTd.textContent = gordura;
    imcTd.textContent = (peso / (altura * altura));

    //este comando 'appendChild' adiciona um outro elemento html
    //como filho de outro elemento html
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var bodyTable = document.querySelector("#tabela-pacientes");
    bodyTable.appendChild(pacienteTr);

});


