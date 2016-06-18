$(document).ready(function() {

    $(".img-gallery img").mouseenter(function(){
        var path = $(this).attr("src");
        $("#larger-image").attr("src", path);
    });

    $(".img-gallery img").mouseleave(function(){
        $("#larger-image").attr("src", "");
    });

    $(".img-gallery img").click(function(){
        // Troca a classe
        $(this).toggleClass("selected-image");

        // Atualiza o contador
        $("#id-amount").text($(".selected-image").length);

        // Atualiza lista
        var list = $("#selected-images-list");
        list.empty();

        var selected_images = $("img.selected-image");

        for(image of selected_images){
            list.append("<li>"
                + $(image).attr('title')
                + "</li>"
            )
        }
    });



});