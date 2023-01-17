function one(){
  let x = "1";
  document.getElementById("input").value += x;
}
function two(){
  let x = "2";
  document.getElementById("input").value += x;
}
function three(){
  let x = "3";
  document.getElementById("input").value += x;
}
function four(){
  let x = "4";
  document.getElementById("input").value += x;
}
function five(){
  let x = "5";
  document.getElementById("input").value += x;
}
function six(){
  let x = "6";
  document.getElementById("input").value += x;
}
function seven(){
  let x = "7";
  document.getElementById("input").value += x;
}
function eight(){
  let x = "8";
  document.getElementById("input").value += x;
}
function nine(){
  let x = "9";
  document.getElementById("input").value += x;
}
function zero(){
  let x = "0";
  document.getElementById("input").value += x;
}
function Plus(){
  document.getElementById("input").value += "+";
  if (document.getElementById("input").value == "+"){
    document.getElementById("input").value = "";
  }
}
function Minus(){
  document.getElementById("input").value += "-";
  if (document.getElementById("input").value == "-"){
    document.getElementById("input").value = "";
  }
}
function Multiply(){
  document.getElementById("input").value += "*";
  if (document.getElementById("input").value == "*"){
    document.getElementById("input").value = "";
  }
}
function Divide(){
  document.getElementById("input").value += "/";
  if (document.getElementById("input").value == "/"){
    document.getElementById("input").value = "";
  }
}
function Clear(){
  document.getElementById("input").value = "";
}
function Dot(){
  document.getElementById("input").value += ".";
}
function square(){
  let x = document.getElementById("input").value;
  let y = x*x;
  document.getElementById("input").value += y;
}
function cube(){
  let x = document.getElementById("input").value;
  let y = x*x*x;
  document.getElementById("input").value += y;
}
function sqrt(){
  if (document.getElementById("input").value == "√"){
    document.getElementById("input").value = "";
  }
  if (document.getElementById("input").value == "NaN"){
    document.getElementById("input").value = "";
  }
  if (document.getElementById("input").value == ""){
    document.getElementById("input").value = "";
  }
  else{
    let x = document.getElementById("input").value;
    let y = x**0.5;
    document.getElementById("input").value = y;
  }
}
function sin(){
  let x = document.getElementById("input").value;
  let y = Math.sin(x);
  document.getElementById("input").value += y;
}
function cos(){
  let x = document.getElementById("input").value;
  let y = Math.cos(x);
  document.getElementById("input").value += y;
}
function tan(){
  let x = document.getElementById("input").value;
  let y = Math.tan(x);
  document.getElementById("input").value += y;
}
function ln(){
  let x = document.getElementById("input").value;
  let y = Math.log10(x);
  document.getElementById("input").value += y;
}
function factorial(){
  let x = document.getElementById("input").value;
  let y = 1;
  for(let i = 1; i <= x; i++){
    y = y*i;
  }
  document.getElementById("input").value += y; 
}
function power(){
  let x = document.getElementById("input").value;
  let y = x*x;
  document.getElementById("input").value += y;
}
function pi(){
  let x = document.getElementById("input").value;
  let y = Math.PI;
  document.getElementById("input").value += y;
}
function e(){
  let x = document.getElementById("input").value;
  let y = Math.E;
  document.getElementById("input").value += y;
}
function percent(){
  let x = document.getElementById("input").value;
  let y = x/100;
  document.getElementById("input").value += y;
}
function abs(){
  let x = document.getElementById("input").value;
  let y = Math.abs(x);
  document.getElementById("input").value += y;
}
function round(){
  let x = document.getElementById("input").value;
  let y = Math.round(x);
  document.getElementById("input").value += y;
}
function ceil(){
  let x = document.getElementById("input").value;
  let y = Math.ceil(x);
  document.getElementById("input").value += y;
}
function floor(){
  let x = document.getElementById("input").value;
  let y = Math.floor(x);
  document.getElementById("input").value += y;
}
function display(){
  let x = document.getElementById("input").value;
  let y = eval(x);
  if (document.getElementById("input").value == "NaN"){
    document.getElementById("input").value = "";
  }
  if (document.getElementById("input").value == ""){
    document.getElementById("input").value = "";
  }
  else{
    document.getElementById("input").value = y;
  }
}
