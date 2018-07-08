var btnAdicionarPaciente = document.querySelector("#adicionar-paciente");
btnAdicionarPaciente.addEventListener('click', function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
        
    var pacienteTr = montarTrPaciente(paciente);

    var bodyTable = document.querySelector("#tabela-pacientes");
    bodyTable.appendChild(pacienteTr);

    form.reset();
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

function montarTrPaciente(paciente){
    //com esse comando eu crio uma nova tag html, e para saber qual eu passo o nome
    //da nova tag
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //este comando 'appendChild' adiciona um outro elemento html
    //como filho de outro elemento html
    pacienteTr.appendChild(montarTd("info-nome", paciente.nome));
    pacienteTr.appendChild(montarTd("info-peso", paciente.peso));
    pacienteTr.appendChild(montarTd("info-altura", paciente.altura));
    pacienteTr.appendChild(montarTd("info-gordura", paciente.gordura));
    pacienteTr.appendChild(montarTd("info-imc", paciente.imc));

    return pacienteTr;
}

function montarTd(classCss, value){
    var tdNova = document.createElement("td");
    tdNova.classList.add(classCss);
    tdNova.textContent = value;

    return tdNova;
}