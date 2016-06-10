document.addEventListener("DOMContentLoaded", function(event) {

    var names = ["Maria", "João", "Carlos", "Joana"];

    var PersonJSON = {
        name: "Adriano",
        yearBirth: 1987,
        gender: "M"
    };

    console.log(names);
    console.log(PersonJSON.name);

    //--------------------------------------------------------------------------

    function Person(name, yearBirth){
        this.name = name;
        this.yearBirth = yearBirth;
        this.getAge = function(){
            return new Date().getFullYear() - this.yearBirth;
        }
    };

    var maria = new Person("Maria", 1987);
    console.log(maria.name);
    console.log(maria.getAge());

    Person.prototype.getName = function(){
        return this.name;
    }

    console.log(maria.getName());

});
