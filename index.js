// Стрелочная функция
var fetchData = function (url, method) {
    console.log(method); // Вывод в консоль
};
// Первый способ
// const reqOptions = {
//     url: "https://someurl.com",
//     method: "GET" as "GET", // Оператор as указывает на конкретное значение
// };
// Второй способ
// const reqOptions = {
//     url: "https://someurl.com",
//     method: "GET",
// } as const; // Создаем объектный литерал при помощи оператора as
var reqOptions = {
    url: "https://someurl.com",
    method: "GET",
};
// Примитивные литеральные типы
// const str = "str";
// const method = "GET";
// Вызов функций
fetchData("hello", "GET");
// fetchData(reqOptions.url, reqOptions.method as "GET");
fetchData(reqOptions.url, reqOptions.method); // Используем <> - угловые скобки для указания конкретного значения
var box = document.querySelector(".box"); // Оператор as указывает на хтмл элемент "box"
var input = document.querySelector("input"); // Оператор as указывает на хтмл элемент "box"
// Первый способ
var someNumber = +input.value; // + - унарный плюс для преобразования базового типа string в number в js-tsc
// Второй способ
// const someNumber: number = input.value as any as number; // Оператор as указывает на любой вид данных "any", но обязательно типа number
console.log(someNumber.toFixed()); // Вывод в консоль
// Третий способ
// fetchData(reqOptions.url, reqOptions.method as "GET"); // Оператор as указывает на конкретное значение
// tsc index.ts (команда в терминале для запуска компилятора ts кода)
// tsc -help (команда в терминале для помощи с настройками)
// ts-node index.ts (команда для запуска ноды + ts файл -- удобно для быстрого вывода в консоль)
