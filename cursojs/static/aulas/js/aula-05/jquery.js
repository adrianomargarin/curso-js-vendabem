$(document).ready(function() {

    $("#id_email").val("test@email.com");

    $("p").css("color", "blue");

    $(".red").css("color", "red");

    console.log($("*").length);

    $("p.red").css("text-transform", "uppercase");

    $("[type=text]").val("TEXT");

    function table_strip(){
        $("#id_table thead tr th").css("background-color", "white");
        $("#id_table tbody tr:even").css("background-color", "silver");
        $("#id_table tbody tr:odd").css("background-color", "#f58383");
    }

    table_strip();

    $("#id_table tbody tr").mouseenter(function(){
        $(this).css("background-color", "blue");
    });

    $("#id_table tbody tr").mouseleave(function(){
        table_strip();
    });
});