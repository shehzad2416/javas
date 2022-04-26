var hardness = parseInt(prompt("steel hadeness"));
var carbon = parseFloat(prompt("enter carbon"));
var tensil = parseInt(prompt("Tensil strenght"));
if ((hardness > 50) && (carbon < 0.7) && ( tensil > 5600) ){
    document.write("A+")
}
else if ((hardness > 50) && (carbon < 0.7)){
    document.write("B")
}
else if ((carbon < 0.7) && ( tensil > 5600) ){
    document.write("C")
}
else{
    document.write("D")
}
var book = parseInt(prompt("How many days type are late"))

if (book >= 1 && book <= 5) {
    document.write("fine 0.5rupees")
}
else if (book >= 6 && book <= 10) {
    document.write("fine 1rupees")
}
else if (book >= 10 && book <= 30) {
    document.write("fine 5rupees")
}
else if (book > 30) {
    document.write("You're membership cancelled")
}
else {
    document.write("invalid")
}
var Age = parseInt(prompt("Enter your Age"));
var Gander = prompt("Enter your Gender");
var Assets = parseInt(prompt("Enter your Assets"));
if ((Age >= 16 && Age <= 25) && (Gander == "male") && (Assets > 2000)) {
    document.write("<h3>you're eligible for 1 Lac</h3>");
}
else if ((Age >= 16 && Age <= 22) && (Gander == "female") && (Assets > 2000)) {
    document.write("<h3>you're eligible for Rs,50000</h3>")
}
else if ((Age >= 23 && Age <= 30) && (Gander == "male") && (Assets > 5000)) {
    document.write("<h3>you're eligible for Rs2,50,000</h3>");
}
else if ((Age >= 25 && Age <= 30) && (Gander == "female") && (Assets > 4000)) {
    document.write("<h3>you're eligible for Rs,2,00,000</h3>")
}
else {
    document.write("<h3>you're not eligible </h3>")
}