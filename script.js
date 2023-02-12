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

// function findPlus(num1, num2) {
//     return num1 + num2;
// }
// function findDifference (num1, num2) {
//     if (num1 > num2) {
//         return num1 - num2;
//     } else {
//        return num2 - num1; 
//     }

// }
// function findMultiplication (num1, num2) {
//     return num1 * num2;
// }
// function findВivision (num1, num2) {
//     return num1 / num2;
// }
// let num1 = Number(prompt("Введите первое число"));
// let num2 = Number(prompt("Введите второе число"));
// console.log(findPlus(num1,num2));
// console.log(findDifference(num1,num2));
// console.log(findMultiplication(num1,num2));
// console.log(findВivision(num1,num2));

//seminar 4

// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// for (let i = 0; i <= 10; i++) {
//     if ( i === 0) {
//         console.log(`${i} - это ноль`);
//     } else if (i % 2 === 0) {
//         console.log(`${i} - четное число`);
//     } else if (i % 2 !== 0) {
//         console.log(`${i} - не четное число`);
//     }     
// }

// Задание 2 
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const array = [1, 2, 3, 4, 5, 6, 7];
// console.log(array);
// array.splice(3,4);
// console.log(array);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// const array = [];
// let size = 5;
// let sum = 0;

// for (let i = 0; i < size; i++) {
//     min= Math.ceil(0);
//     max= Math.floor(9);
//     array.push(Math.floor(Math.random()*(max-min+1))+min);  
//     sum += array[i];   
//     if (array[i] === 3) console.log('В данном массиве есть число 3');
// }

// let minNum = array[0];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] < minNum) minNum = array[i];      
// }
// console.log(array);
// console.log(`сумма элементов этого массива ${sum}`);
// console.log(`минимальное число данного массива ${minNum}`);

// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// let newObject = '';
// for (let i = 0; i < 20; i++) {
//     newObject += 'x'
//     console.log(newObject);    
// }


//seminar 5 

// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.
// const numbers = {
//     keyin1: 1,
//     keyin2: 2,
//     keyin3: 3,
//     keyin4: 4,
//     keyin5: 5,
//     keyin6: 6,
//     keyin7: 7,
// }

// for (const key in numbers) {
//     if (numbers[key] >= 3) {
//       console.log(numbers[key])  
//     } 
// }

// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

// const post = {
//     author: "John", // вывести этот текст
//     postId: 23,
//     comments: [ 
//         {   userId: 10,
//             userName: "Alex",
//             text: "lorem ipsum",
//             rating: {
//                 likes: 10,
//                 dislikes: 2, // вывести это число
//             },
//         },
//         {   userId: 5, // вывести это число
//             userName: "Jane",
//             text: "lorem ipsum 2", // вывести этот текст
//             rating: {
//                 likes: 3,
//                 dislikes: 1,
//             },
//         },
//     ],
// };
// console.log(post.author + " " + post.comments[0].rating.dislikes + " " + post.comments[1].userId + " " + post.comments[1].text);

// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

// const products = [
//     {
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },
// ];

// products.forEach(products => products.price *= 0.85);
// console.log(products);

// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

const productsFoto = products.filter(products => 'photos' in products && 
products.photos.length !== 0);
console.log(productsFoto);

const productsSort = products.sort((products1, products2) => 
products1.price - products2.price);
console.log(productsSort);
     
