// Functions
// function greet(studentName) {
//     console.log("Hello " + studentName)
// }
// greet("Ayan");
// greet("Imtesal");
// greet("Wania");

// function employee(fileNo) {
//     return "Working on file no " + fileNo;
// }
// let data = employee(7);
// console.log(data);

// function add(num1, num2) {
//     return num1 + num2;
// }
// let result = add(5,7);
// console.log(result);

// Recursion
// function writeData(data, times){
//     console.log(data + times);
//     if (times > 0) {
//         console.log(times)
//         writeData(data, times - 1);
//     }
// }
// writeData("Hello ", 5);

// function factorial(num) {
//     if(num > 1) {
//         return num * factorial(num - 1);
//     }
//     return 1;
// }
// console.log(factorial(5));
// 5 * 4 * 3 * 2 *  1

// Closures
// let abc = 7; // Global Variable
// function print(def) {
//    // def => Local Variable
//    return function (ghi) {  // anonymous function
//         console.log(def + ghi);
//    }
// }
// let innerFuntion = print(5);
// innerFuntion(5); 

function saveUrl(url) {
    return function() {
        fetch(url)
        .then(response => response.json())
            .then(json => console.log(json));
    }
}
// Save URL
let makesRequest = saveUrl("https://jsonplaceholder.typicode.com/todos");
// Request attempt
makesRequest();


