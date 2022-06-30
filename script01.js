let argument;

function getArgument() {
    if(typeof argument != "string"){
        return "Передана не строка"
    }
    else if (typeof argument == "string"){
        if (argument.length>30){
        argument = argument.slice(0, 29) + "...";
        return argument.trim()
        }
        else return argument.trim()
    }
}

argument = prompt("Введите строку");
console.log(getArgument());