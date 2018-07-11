var inputFiltrar = document.querySelector("#filtrar-tabela");

inputFiltrar.addEventListener("input", function(){

    var pacientes = document.querySelectorAll(".paciente");

    
    if(inputFiltrar.value.length > 0){
        pacientes.forEach(function(paciente){
            var pacienteTd = paciente.querySelector(".info-nome");
            var pacienteNome = pacienteTd.textContent;
    
            if(pacienteNome != inputFiltrar.value){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        });
    } else {
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel");
        });
    }


});