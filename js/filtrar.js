var inputFiltrar = document.querySelector("#filtrar-tabela");

inputFiltrar.addEventListener("input", function(){

    var pacientes = document.querySelectorAll(".paciente");

    
    if(inputFiltrar.value.length > 0){
        pacientes.forEach(function(paciente){
            var pacienteTd = paciente.querySelector(".info-nome");
            var pacienteNome = pacienteTd.textContent;
            
            var expressao = new RegExp(inputFiltrar.value, "i");

            if(expressao.test(pacienteNome)){
                paciente.classList.remove("invisivel");
            } else {
                paciente.classList.add("invisivel");
            }
        });
    } else {
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel");
        });
    }


});