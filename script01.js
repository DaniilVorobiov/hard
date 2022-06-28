let lang = prompt('На каком языке вывести дни недели?');
let weekdays = {
    ru: ['понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'],
    en: ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday']
};
console.log(weekdays[lang].toString());

let namePerson = prompt("Имя");
let personPosition = namePerson == "Артем" ? "директор" :
    namePerson == "Александр" ? "преподаватель" :
    "студент";
console.log(personPosition);