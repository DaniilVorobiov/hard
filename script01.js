let lang = prompt('На каком языке вывести дни недели?');
if (lang !=="ru" && lang !=="en"){
    console.log("Что-то пошло не так");
}

if (lang=="ru"){
    console.log("понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
}
else if(lang=="en"){
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
}

switch(true){
    case lang=="ru":
        console.log("понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
        break;
    case lang=="en":
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
        break;
}

let weekdays = {
    ru: ['понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'],
    en: ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'],
};
console.log(weekdays[lang].toString());

let namePerson = prompt("Имя");
let personPosition = namePerson == "Артем" ? "директор" :
    namePerson == "Александр" ? "преподаватель" :
    "студент";
console.log(personPosition);