document.addEventListener("DOMContentLoaded", function(event) {

    function deleteConfirm(){
        var _confirm = confirm("Tem certeza que quer excluir");

        if(_confirm){

            var text = prompt('Digite EXCLUIR para confirmar:');

            if(text === "EXCLUIR"){
                alert("Exclusão realizada com sucesso!");
            }else{
                alert("Exclusão NÃO realizada!");
            }
        }
    }

    document.getElementById('id_delete').addEventListener("click", function(){
        deleteConfirm();
    });

});
