document.addEventListener("DOMContentLoaded", function(event) {

    function saveLocalStorage(){
        window.localStorage.local = document.getElementById('id_local_storage').value;
    };

    function loadLocalStorage(){
        document.getElementById('id_local_storage').value = window.localStorage.local;
    };

    document.getElementById("id_local_storage").addEventListener("keyup", function(){
        saveLocalStorage();
    });

    document.getElementById("load_local_storage").addEventListener("click", function(){
        loadLocalStorage();
    });

});
