const arr = [3, 10, 1, 16, 30, 5, 2, 30, 99, 9];
//---------------------------------------- ARRAY -----------------------------------------//
// 1
let sum = 0;
for (let i = 0; i < arr.length;i++){
    sum += arr[i];
}
console.log(sum);

// 2, 3
let even_arr = [];
let odd_arr_sum = 0
for (let i = 0; i < arr.length;i++){
    if (arr[i] % 2 == 0) {
        console.log(even_arr.push(arr[i])); 
    } else {
        console.log(odd_arr_sum += arr[i]);
    }
}
console.log(even_arr);
console.log(odd_arr_sum);

// 4
let odd_arr = [];
for (let i = 0; i < arr.length;i++){
    if (arr[i] % 3 == 0) {
        console.log(odd_arr.push(arr[i]));
    }
}
console.log(odd_arr);

// 5
let lower_20_arr = 0;
for (let i = 0; i < arr.length;i++){
    if (arr[i] < 20) {
        console.log(lower_20_arr += arr[i]);
    }
}
console.log(lower_20_arr);

// 6
let not_lower_16_arr = [];
for (let i = 0; i < arr.length;i++){
    if (arr[i] > 15) {
        console.log(not_lower_16_arr.push(arr[i]));
    }
}
console.log(not_lower_16_arr);

// 7
let min = arr[0];
for (let i = 0; i < arr.length;i++){
    if(min > arr[i]){
    min = arr[i];
    }
}
console.log("min= ",min);

let max = arr[0];
for (let i = 0; i < arr.length;i++){
    if(max < arr[i]){
    max = arr[i];
    }
}
console.log("max= ",max);

//---------------------------------------- FUNCTION -----------------------------------------//
//1
function uoc(n) {
    for (let i = 1; i <= n; i++) {
        if(n % i === 0){
            console.log(i);
        }
    }
}
uoc(99);

// 2
function tam_giac(c, d , e) {
    if (c+d>e && e+c>d && e+d>c) {
        console.log('tam giac');
    } else {
        console.log('khong phai tam giac');
    }
}
tam_giac(10, 2, 15);
// 3
function tinhtong(a,b) {
    console.log(a+b);
}
tinhtong(5,4);

// 4
function checkLeapyear(f) {
    if(f === 366) {
        console.log('Leap year');
    } else if(f === 365) {
        console.log('not leap year');
    } else {
        console.log('Error');
    }
}
checkLeapyear(364);

// 5
function centu(n) {
    if (n % 100 === 0) {
        return (n / 100);
    } else {
        return (parseInt(n / 100) + 1);
    }
}
console.log(centu(101));

// 6
function reverseString(g) {
    console.log(g.split("").reverse().join(""));
}
reverseString("MindX");

//7
function doi_xung(h) {
    for (let i = 0; i < h.length; i++) {
        if(arr[0] == arr.length -1 -i) {
            console.log('doi xung');
    }else {
            console.log("ko doi xung");
    }
}
}
doi_xung("2002");