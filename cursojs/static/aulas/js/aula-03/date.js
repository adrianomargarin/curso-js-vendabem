document.addEventListener("DOMContentLoaded", function(event) {

    var today = new Date();
    console.log(today);

    var yesterday = new Date(2016, 5, 09, 0, 0, 0);
    console.log(yesterday);

    var time = today.getTime() + (1000 * 60 * 60 * 24);
    var tomorrow = new Date(time);
    console.log(tomorrow);

});
