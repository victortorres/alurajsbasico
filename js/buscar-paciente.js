var btnBuscarPaciente = document.querySelector("#buscar-paciente");

btnBuscarPaciente.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
            var pacientesExternos = JSON.parse(xhr.responseText);
    
            pacientesExternos.forEach(function(paciente) {
                adicionarPaciente(paciente);
            });

            var ul = document.querySelector("#mensagems-erro");
            ul.innerHTML = "";
        } else {
            var mensagensDeErro = ["Não possível buscar os pacientes."]
            exibirErros(mensagensDeErro);
        }
    });


    xhr.send();
});
