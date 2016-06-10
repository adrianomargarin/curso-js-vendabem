document.addEventListener("DOMContentLoaded", function(event) {

    function calcularSoma(numero_1, numero_2){
        var resultado = numero_1 + numero_2;
        alert(resultado);
    }

    document.getElementById('calcularSoma').addEventListener("click", function(){
        calcularSoma(4, 6);
    });

});
