document.addEventListener("DOMContentLoaded", function(event) {

    function search(){
        var textDiv = document.getElementById('search');
        var text = textDiv.innerHTML;
        var searchText = document.getElementById('id_search').value;

        textDiv.innerHTML = text.replace(/<strong>/g, "");
        text = textDiv.innerHTML;

        textDiv.innerHTML = text.replace(/<\/strong>/g, "");
        text = textDiv.innerHTML;

        textDiv.innerHTML = text.replace(eval("/" + searchText + "/g"), " <strong>" + searchText + "</strong> ");
        text = textDiv.innerHTML;
    }

    document.getElementById('id_submit').addEventListener("click", function(){
        search();
    });

});
