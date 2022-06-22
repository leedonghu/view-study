const n0 = document.getElementById("n0");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const n4 = document.getElementById("n4");
const n5 = document.getElementById("n5");
const n6 = document.getElementById("n6");
const n7 = document.getElementById("n7");
const n8 = document.getElementById("n8");
const n9 = document.getElementById("n9");
const com = document.getElementById("com");
const divide = document.getElementById("divide");
const mult = document.getElementById("mult");
const sub = document.getElementById("sub");
const eq = document.getElementById("eq");
const plus = document.getElementById("plus");
const ac = document.getElementById("all_clear");

let result_input = document.getElementById("result");
let result = "";
let result_calc = "";

n0.addEventListener("click", function(){
    result += 0;
    result_calc += 0;
    result_input.innerText = result;
});

n1.addEventListener("click", function(){
    result += 1;
    result_calc += 1;
    result_input.innerText = result;
});

n2.addEventListener("click", function(){
    result += 2;
    result_calc += 2;
    result_input.innerText = result;
});

n3.addEventListener("click", function(){
    result += 3;
    result_calc += 3;
    result_input.innerText = result;
});

n4.addEventListener("click", function(){
    result += 4;
    result_calc += 4;
    result_input.innerText = result;
});

n5.addEventListener("click", function(){
    result += 5;
    result_calc += 5;
    result_input.innerText = result;
});

n6.addEventListener("click", function(){
    result += 6;
    result_calc += 6;
    result_input.innerText = result;
});

n7.addEventListener("click", function(){
    result += 7;
    result_calc += 7;
    result_input.innerText = result;
});

n8.addEventListener("click", function(){
    result += 8;
    result_calc += 8;
    result_input.innerText = result;
});

n9.addEventListener("click", function(){
    result += 9;
    result_calc += 9;
    result_input.innerText = result;
});

com.addEventListener("click", function(){
    result += ".";
    result_calc += ".";
    result_input.innerText = result;
});

divide.addEventListener("click", function(){
    result += "÷";
    result_calc += "/";
    result_input.innerText = result;
});

mult.addEventListener("click", function(){
    result += "*";
    result_calc += "*";
    result_input.innerText = result;
});

sub.addEventListener("click", function(){
    result += "-";
    result_calc += "-";
    result_input.innerText = result;
});

plus.addEventListener("click", function(){
    result += "+";
    result_calc += "+";
    result_input.innerText = result;
});

eq.addEventListener("click", function(){
    let calc = eval(result_calc);
    console.log(calc);
    // result += "=";
    // result += calc;
    result_input.innerText = calc;
});

ac.addEventListener("click", function(){
    result = 0;
    result_input.innerText = 0;
    result_calc = "";
});



