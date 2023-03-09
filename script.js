function onAddClick() {
    var numberOne = document.getElementById("numberOne").value;
    var numberTwo = document.getElementById("numberTwo").value;

    let sum = parseInt(numberOne) + parseInt(numberTwo);
    document.getElementById("result").innerHTML = sum;
}
function onSubtractClick() {
    var numberOne = document.getElementById("numberOne").value;
    var numberTwo = document.getElementById("numberTwo").value;

    let sum = parseInt(numberOne) - parseInt(numberTwo);
    document.getElementById("result").innerHTML = sum;
}
function onMultiplyClick() {
    var numberOne = document.getElementById("numberOne").value;
    var numberTwo = document.getElementById("numberTwo").value;

    let sum = (numberOne) * (numberTwo);
    document.getElementById("result").innerHTML = sum;
}
function onDivideClick() {
    var numberOne = document.getElementById("numberOne").value;
    var numberTwo = document.getElementById("numberTwo").value;

    let sum = parseInt(numberOne) / parseInt(numberTwo);
    document.getElementById("result").innerHTML = sum;
}