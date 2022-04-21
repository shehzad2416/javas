var pori = parseFloat(prompt("how many pori you want to"));
var pori = pori * 29
var halwa = parseFloat(prompt("how many halwa you want to"));
var alo = parseFloat(prompt("how many alo you want to"));
var chana = parseFloat(prompt("how many chana you want to"));
var ashar = parseFloat(prompt("how many ashar you want to"));
var halwa = halwa * 20
var alo = alo * 55
var chana = chana * 100
var ashar = ashar * 15
var Bill = pori + halwa + alo + chana + ashar
var tax = Bill * 0.16
var Total  = Bill + tax
    document.write("pori" + pori + "<br/>")
document.write("halwa" + halwa + "<br/>")
document.write("alo" + alo + "<br/>")
document.write("chana" + chana + "<br/>")
document.write("ashar" + ashar + "<br/>" + "<hr/ >")
document.write("Bill" + Bill + "<hr/ >")
document.write("tax" + tax + "<hr/ >")
document.write("Total" + Total + "<hr/ >")


