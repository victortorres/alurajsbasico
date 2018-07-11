var pacientesTabela = document.querySelector("#tabela-pacientes");

pacientesTabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function(){
        //o listener foi adicionado no pai, que eh a tabela, mas
        //o evento vai acontecer em um dos filhos, como a td ou a tr
        //com esse comando eu consigo pegar quem de fato sofreu o evento
        //e quando eu passo o parentNode eu estou pegado a tag pai de onde
        //foi executado o evento
        event.target.parentNode.remove();
    }, 500);
    
});