// var english = parseInt(prompt("english marks"));
// var computer = parseInt(prompt("computer marks"));
// var maths = parseInt(prompt("maths marks"));
// var sindi = parseInt(prompt("sindi marks"));
// var chemistry = parseInt(prompt("chemistry marks"));
// var total = english + computer + maths + sindi + chemistry
// document.write("total" + total + "<br />")
// var per = (total * 100) / 500;
// document.write("per" + per +"<br />");
// if (per >= 80) {
//     document.write("you have got A+")
// }
// else if (per >= 70) {
//     document.write("you have got A")
// }
// else if (per >= 60) {
//     document.write("you have got B")
// } else if (per >= 50) {
//     document.write("you have got C")
// }  
// else  {
//     document.write("you have got Fail")
// }
// var Name = prompt("Enter you email");
// var Password = prompt("Enter you Password"); 
// if (Name == "shehzadahmd24@gmail.com" && Password == "5246"){
//     document.write("welcom admin")
// }
// else {
//     document.write("Invaild credentails")
// }
alert("welcome to shehzad unversity");
var coures = parseInt(prompt("Enter your course"));
var courefees = 0;
var totalfees = 0;
if (coures >= 3 && coures < 7) {
    courefees = 18000 * coures;
    totalfees = courefees;
    var library = prompt("your library")
    var transport = prompt("your transport")
    var sport = prompt("your sport")
    var canteen = prompt("your canteen")
    if (library == "yes") {
        totalfees = courefees + 2500
    }
    if (transport == "yes") {
        totalfees = courefees + 5000
    } if (sport == "yes") {
        totalfees = courefees + 4000
    }
    if (canteen == "yes") {
        totalfees = courefees + 4500

    }
    var per = parseFloat(prompt("Enter you per"));
    var newfees = 0;
    if (per >= 90 && per <= 101) {
        newfees = totalfees * 0.5;
        totalfees = totalfees - newfees
    }

    else if (per >= 80 && per <= 89) {
        newfees = totalfees * 0.25;
        totalfees = totalfees - newfees
    }
    document.write("<h1>your total coures is " + coures + " </h1>")
    document.write("<h1>your total coures fees is " + courefees + " </h1>")
    document.write("<h1>your total new fees is " + newfees + " </h1>")
    document.write("<h1>your total total fees is " + totalfees + " </h1>")

}
else {
    document.write("course is must be greaterthan is 2and less than is 7 ")
}