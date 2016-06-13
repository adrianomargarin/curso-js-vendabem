document.addEventListener("DOMContentLoaded", function(event) {

    var timer = null;

    function start(){
        timer = setInterval(function(){
            document.getElementById("id-news").scrollTop += 5;
        }, 100);
    }

    function stop(){
        if(timer !== null){
            clearInterval(timer);
        }
    }

    document.getElementById('id-start').addEventListener("click", function(){
        start();
    });

    document.getElementById('id-stop').addEventListener("click", function(){
        stop();
    });

});
