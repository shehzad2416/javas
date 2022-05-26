function calc() {
    var currency = parseFloat(document.getElementById("convert").value);
    var convert = document.getElementById("unit").value;

    if (convert == "dollar") {
        var currencyconverter = currency / 202.38;
        document.getElementById("answer").value = currencyconverter + "dollar";
    }
    else if (convert == "dirham") {
        var currencyconverter = currency / 55.10;
        document.getElementById("answer").value = currencyconverter + " dirham";
    }
    else if (convert == "taka") {
        var currencyconverter = currency / 2.30;
        document.getElementById("answer").value = currencyconverter + " taka";
    }

    else if (convert == "euro") {
        var currencyconverter = currency / 216.74;
        document.getElementById("answer").value = currencyconverter + " euro";
    }
    else if (convert == "riyal") {
        var currencyconverter = currency / 53.95;
        document.getElementById("answer").value = currencyconverter + " riyal";

    } 
    else if (convert == "dinar") {
        var currencyconverter = currency / 661.79;
        document.getElementById("answer").value = currencyconverter + " dinar";
    }
    else if (convert == "pound") {
        var currencyconverter = currency / 254.34;
        document.getElementById("answer").value = currencyconverter + " pound";

    }
    else if (convert == "indian currency") {
        var currencyconverter = currency / 2.61;
        document.getElementById("answer").value = currencyconverter + " indian currency";

    } 
    else {
        document.getElementById("answer").value = "Choose Input Correctly";
    }


}