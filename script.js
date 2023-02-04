// seminar1
// task 1

// let degreeCelsius = 10;
// let degreeFahrenheit = (9/5) * degreeCelsius + 32;
// console.log(`Температура по цельсию = ${degreeCelsius}°C,
// температура по Фаренгейту = ${degreeFahrenheit}°F.`)

// task2

// const nameNew = "Yulia";
// let admin = nameNew;
// console.log(admin);\


// seninar2

// task 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

// let num1 = Number(prompt("Введите первое число"));
// let num2 = Number(prompt("Введите второе число"));

// (num1 <= 1) ? console.log("первое число меньше или равно 1") : console.log("первое число больше 1"); 
// (num2 >= 3) ? console.log("второе число больше или равно 3") : console.log("второе число меньше 3");

// task 2
// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }


// let test = true;
// (test === true) ? console.log('+++') : console.log('---');

// task 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// min = Math.ceil(1);
// max = Math.floor(31);
// let day = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(day);

// if (day <= 10) {
//     console.log(`число ${day} попадает в первую декаду месяца`);
// } else if (day <= 20) {
//     console.log(`число ${day} попадает во вторую декаду месяца`);
// } else {
//     console.log(`число ${day} попадает в третью декаду месяца`);
// }

// task 4
// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

// Пример:
// Пользователь ввел число 163. Программа должна вывести:
// "В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

let num = Number(prompt("Введите число"));

let thousand = Math.trunc(num / 1000) % 10;
let sot = Math.trunc(num / 100) % 10;
let ten = Math.trunc(num / 10) % 10;
let ed = num % 10;

console.log(`В числе ${num} чысяч: ${thousand}, сотен: ${sot}, десяток: ${ten}, едениц: ${ed}.`);