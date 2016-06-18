document.addEventListener("DOMContentLoaded", function(event) {

    function back(){
        history.back();
    };

    document.getElementById('id-back').addEventListener("click", function(){
        back();
    });

});
