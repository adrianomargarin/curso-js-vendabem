document.addEventListener("DOMContentLoaded", function(event) {

    function fizzBuzz(){
        var result_fizz_buzz = "";

        for(var i = 1; i < 100; i++){
            var m3 = i % 3;
            var m5 = i % 5;

            if(m3 === 0 && m5 === 0){
                result_fizz_buzz = result_fizz_buzz + "FizzBuzz ";
            }else if(m3 === 0){
                result_fizz_buzz = result_fizz_buzz + "Fizz ";
            }else if(m5 === 0){
                result_fizz_buzz = result_fizz_buzz + "Buzz ";
            }else{
                result_fizz_buzz = result_fizz_buzz + String(i) + " ";
            }
        }

        document.getElementById("result_fizz_buzz").innerHTML = result_fizz_buzz;
    }

    function multiplicationTable(){
        var multiplication_tables_string = "";

        for(var i = 1; i <= 10; i++){
            multiplication_tables_string += "<div class='col-md-2'>"
            multiplication_tables_string += "<div class='panel panel-success'>";
            multiplication_tables_string += "<div class='panel-heading'><h3 class='panel-title'>Tabuada do " + i + "</h3></div>";
            multiplication_tables_string += "<div class='panel-body'>";

            for(var j = 1; j <= 10; j++){
                multiplication_tables_string += "<p>" + i + " x " + j + " = " + i * j + "</p>";
            }

            multiplication_tables_string += "</div></div></div>";
        }

        document.getElementById('multiplication_tables').innerHTML += multiplication_tables_string;
    }


    fizzBuzz();
    multiplicationTable();
});
