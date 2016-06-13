function pageLoaded(){
    console.log("Bem vindo ao sistema!");
}

function highlight(elem, is_highlight){
    if(is_highlight){
        elem.style.backgroundColor = "blue";
        elem.style.color = "white";
    }else{
        elem.style.backgroundColor = "";
        elem.style.color = "";
    }
}

function goodbye(){
    alert("Até logo!");
}

function uppercase(elem){
    elem.value = elem.value.toUpperCase();
}

function validate(){
    var name = document.getElementById('id_name');
    if(name.value.trim().length === 0){
        console.log("Preencha o nome!");
        name.style.border = "1px solid red";
        name.focus();

        return false;
    }
}
