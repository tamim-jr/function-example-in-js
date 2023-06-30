
//example 01

function numberCal0(num){
    result = num * num;
    document.write ("Your Result is: " + result + "</br>");
}
numberCal0(1);


//example 02

function numberCal1(num1, num2){
    result = num1 * num2;
    document.write ("Your Result is: " + result + "</br>");
}
numberCal1(3, 3);

//example 03

function numberCal2(num1, num2){
    result = num1 * num2;
     return result;
}
document.write(numberCal2( 4, 3));

//example 04

function numberCal3(num1, num2){
    result = num1 * num2;
     return result;
}

var x = numberCal2( 4, 3);
document.write("</br> Your Result is: " + x + "</br>");

