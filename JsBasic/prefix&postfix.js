//toán tử ++ --
//prefix & postfix

var a = 6;
//prefix
//việc 1: +1 cho a, a = a + 1 => a = 7
//việc 2: trả về a sau khi được + 1

//postfix
// việc 1: `a copy`, `a copy` = 6
// việc 2: trừ 1 của a, a = a - 1 => a =5
// việc 3: trả về `a copy`
var output = a++; //lưu vào `output
console.log(output);

console.log(a)

var number = 6
//var out = number++ + --number;
var out = ++number * 2 - --number * 2

// 7 * 2 - 6 * 2
console.log(out);


//Toán tử chuỗi - String operator
var firstName = 'Tri';
var lastName = 'Phan';
var name = 'Tri';
name += ' Phan'
console.log(name);

/**
 * ==   --> bằng
 * !=   --> ko bằng
 * >    --> lớn hơn
 * <    --> nhỏ hơn
 * >=   --> lớn hơn hoặc bằng
 * <=   --> bé hơn hoặc bằng
 */

var age = 16;
var canBuyAlcohol = age > 18;
console.log('đủ tuổi chưa? ' + canBuyAlcohol);


var number = 13;

// Sử dụng toán tử % để lấy ra phần dư của number khi chia cho 2
// Khai báo biến remian ,và gán phần dư cho biến đặt tên là remain
var remain = number % 2

// Sử dụng toán tử so sánh === để thực hiện so sánh biến remain với 1
// Khai báo biến isOdd, và gán kết quả so sánh cho biến isOdd
var isOdd = remain === 1;

// In giá trị của biến isOdd ra cửa sổ console của trình duyệt
console.log(isOdd) // Output: ?


function show() {
    var myString = '';
    //chạy argument gán vào param
    for (var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString)
}
show('123','456','789','101112');

function hiden () {
    var my = '';
    for (var nice of arguments) {
        my += `${nice} - ` 
    }
    console.log(my)
}
hiden('123','456');


//Return trong hàm - Javascript cơ bản
// var isConfirm = confirm('123');
// console.log(isConfirm);
// function sum(a,b) {
//     return a.toString() + b.toString();
// }

// var result = sum(2,2);
// alert(result);