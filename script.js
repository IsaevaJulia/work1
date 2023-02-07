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

// let num = Number(prompt("Введите число"));

// let thousand = Math.trunc(num / 1000) % 10;
// let sot = Math.trunc(num / 100) % 10;
// let ten = Math.trunc(num / 10) % 10;
// let ed = num % 10;

// seminar3

// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// function cube(numUser) {
//     return numUser*numUser*numUser;
// }
// console.log(cube(Number(prompt('введите первое число'))) + cube(Number(prompt('введите второе число'))));


// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

// function getRemainderSalary (salary){
//     return salary = salary* 0.87;        
// }

// const checkString = salary => {
//     (isNaN(salary)) ? console.log('значение задано не верно') : console.log('значение задано верно'); 
// }

// let salary = prompt('введите размер зарплаты');
// checkString(salary);
// let newSalary = Number(salary);
// console.log(`Размер заработной платы за вычетом налогов равен ${getRemainderSalary(newSalary)}`);


// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// function findMax(num1, num2, num3) {
//     let max = num1;
//     if (num2 > num1 && num2 > num3) {
//         max = num2;
//     } else if ( num3 > num1 && num3 > num2) {
//         max = num3;        
//     } 
//     return max;
// }
// let num1 = Number(prompt("Введите первое число"));
// let num2 = Number(prompt("Введите второе число"));
// let num3 = Number(prompt("Введите третье число"));
// console.log(`максимальным число из: ${num1}, ${num2}, ${num3} является число ${findMax(num1,num2,num3)}`);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

function findPlus(num1, num2) {
    return num1 + num2;
}
function findDifference (num1, num2) {
    if (num1 > num2) {
        return num1 - num2;
    } else {
       return num2 - num1; 
    }
    
}
function findMultiplication (num1, num2) {
    return num1 * num2;
}
function findВivision (num1, num2) {
    return num1 / num2;
}
let num1 = Number(prompt("Введите первое число"));
let num2 = Number(prompt("Введите второе число"));
console.log(findPlus(num1,num2));
console.log(findDifference(num1,num2));
console.log(findMultiplication(num1,num2));
console.log(findВivision(num1,num2));