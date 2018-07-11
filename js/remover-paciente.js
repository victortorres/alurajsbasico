var pacientesTabela = document.querySelectorAll(".paciente");

pacientesTabela.forEach(function(pacienteTr){
    pacienteTr.addEventListener("dblclick", function(){
        this.remove();
    });
});