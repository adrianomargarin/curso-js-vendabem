document.addEventListener("DOMContentLoaded", function(event) {

    var queue = ["Maria", "João"];
    var error_queue = document.getElementById('id_error_queue')

    function updateQueue(){
        error_queue.setAttribute("class", "hidden");
        var ulQueue = document.getElementById('id_queue');
        var html = "";

        for(name of queue){
            html += "<li>" + name + "</li>";
        }

        ulQueue.innerHTML = html;
    }

    updateQueue();

    function addLine(){
        var name = document.getElementById('id_name');
        var error = document.getElementById('id_error');

        if(name.value.trim().length === 0){
            error.innerHTML = "Informe o nome do paciente!";

            return false;
        }

        queue.push(name.value.trim());
        error.innerHTML = "";
        name.value = "";
        updateQueue();
    }

    document.getElementById('id_add').addEventListener("click", function(){
        addLine();
    });

    function nextLine(){
        if(queue.length > 0){
            var next = queue.shift();
            console.log(next);
            updateQueue();
            error_queue.setAttribute("class", "hidden");
        }else{
            document.getElementById('id_error_queue').setAttribute("class", "show");
            console.log("Não tem pacientes para serem atendidos!");
        }

    }

    document.getElementById('id_next').addEventListener("click", function(){
        nextLine();
    });

});
