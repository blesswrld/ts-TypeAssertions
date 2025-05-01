const fetchData = (url: string, method: "GET" | "POST"): void => {
    console.log(method);
};

// Первый способ
// const reqOptions = {
//     url: "https://someurl.com",
//     method: "GET" as "GET", // Оператор as указывает на конкретное значение
// };

// Второй способ
const reqOptions = {
    url: "https://someurl.com",
    method: "GET",
} as const; // Создаем объектный литерал при помощт оператора as

// Примитивные литеральные типы
// const str = "str";
// const method = "GET";

// Вызов функций
fetchData("hello", "GET");
fetchData(reqOptions.url, reqOptions.method);

// Третий способ
// fetchData(reqOptions.url, reqOptions.method as "GET"); // Оператор as указывает на конкретное значение

// tsc index.ts (команда в терминале для запуска компилятора ts кода)
// tsc -help (команда в терминале для помощи с настройками)
// ts-node index.ts (команда для запуска ноды + ts файл -- удобно для быстрого вывода в консоль)
