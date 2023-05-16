function reverseNumber() {
    var number = parseInt(document.getElementById("inputNumber").value);
    var reversedNumber = 0;
    
    while (number > 0) {
        reversedNumber = reversedNumber * 10 + number % 10;
        number = Math.floor(number / 10);
    }
    
    document.getElementById("result").innerHTML = "Số đảo ngược: " + reversedNumber;
}