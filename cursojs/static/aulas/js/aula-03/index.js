document.addEventListener("DOMContentLoaded", function(event) {

    // Comparação

    var nome1 = "João";
    var nome2 = "João";

    console.log(nome1 === nome2);
    console.log(typeof name1);

    //--------------------------------------------------------------------------
    // Comparação de objetos

    var nome3 = new String("João");
    var nome4 = new String("João");

    console.log(nome3 == nome4);
    console.log(typeof name3);

    //--------------------------------------------------------------------------

    var cidade = "Caxias do Sul";

    console.log(cidade.length);

    // Consultar a posição de um caracter em uma determinada posição
    console.log(cidade.charAt(2));

    // console.log(cidade.charCodeAt());

    // console.log(cidade.concat());

    // console.log(cidade.fromCharCode());

    console.log(cidade.indexOf("a")); // primeira posição

    console.log(cidade.lastIndexOf("a")); // última posição

    // console.log(cidade.localeCompare());

    // console.log(cidade.match());

    console.log(cidade.replace("Sul", "Norte"));

    console.log(cidade.search("do"));

    // console.log(cidade.slice());

    console.log(cidade.split(" "));

    console.log(cidade.substr(2, 5));

    console.log(cidade.substring(2, 5));

    console.log(cidade.toLocaleUpperCase());

    console.log(cidade.toUpperCase());

    console.log(cidade.toLocaleLowerCase());

    console.log(cidade.toLowerCase());

    // console.log(cidade.toString());


    // console.log(cidade.trim());

    // console.log(cidade.valueOf());

});
