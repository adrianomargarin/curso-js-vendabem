document.addEventListener("DOMContentLoaded", function(event) {

    if(5 > 6){
        console.log(true);
    }else{
        console.log(false);
    }

    var nome = "João";

    for(i = 1; i <=3; i++){
        console.log(i);
    }

    var a = 5;

    while(a <= 10){
        console.log(a);
        a++;
    }

    var b = 5;
    b++;
    console.log(b);
    b--;
    console.log(b);
    b += 10;
    console.log(b);

    switch (b){
        case 5:
            console.log("Teste 3");
            break;
        case 15:
            console.log("Teste 4");
            break
        default:
            console.log("Teste 5");
    }

    var a = 1;
    var b = true;

    if(a == b){
        console.log('Teste 1: A e B são iguais!');
    }else{
        console.log('Teste 1: A e B NÃO são iguais!');
    }

    if(a === b){
        console.log('Teste 2: A e B são iguais!');
    }else{
        console.log('Teste 2: A e B NÃO são iguais!');
    }

});
