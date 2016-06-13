document.addEventListener("DOMContentLoaded", function(event) {
    var counter = null;

    function saveCookies(){
        var notes = document.getElementById('id-notes').value;
        document.cookie = "notes=" + notes.split("\n").join("<br>");
        // document.getElementById('id_error_queue').setAttribute("class", "show");
    }

    function save(){
        if(counter !== null){
            clearTimeout(counter);
        }

        counter = setTimeout(saveCookies(), 1500);
    }

    document.getElementById('id-notes').addEventListener("keyup", function(){
        save();
    });

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');

        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];

            while(c.charAt(0) == ' ') {
                c = c.substring(1);
            }

            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }

        return "";
    }

    function loadNotes(){
        document.getElementById('id-notes').value = getCookie("notes").split("<br>").join("\n");
    }

    loadNotes();
});
