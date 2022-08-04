const vector = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

function letra() {
  let numero = document.getElementById("numero").value;
  document.getElementById("letra").innerHTML = vector[numero%23];
};
