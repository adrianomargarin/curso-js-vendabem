document.addEventListener("DOMContentLoaded", function(event) {

    function google(){
        window.location.assign('http://google.com');
    };

    function page(){
        window.location.assign('/aula-05/window-new-page');
    };

    document.getElementById('id-google').addEventListener("click", function(){
        google();
    });

    document.getElementById('id-page').addEventListener("click", function(){
        page();
    });

});
