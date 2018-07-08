var btnAdicionarPaciente = document.querySelector("#adicionar-paciente");
btnAdicionarPaciente.addEventListener('click', function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
        

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
    imcTd.textContent = calcularIMC(peso, altura);

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

function obtemPacienteDoFormulario(form){
    //1- ao pegar o form da tela, se eu der um "name" para cada atributo(input)
    //da tela, eu posso pegalo pelo name, e ao passar o parametro value eu
    //pego o valor digitado
    //2- ao envolver com chaves os atributos eu estou criando um objeto
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}