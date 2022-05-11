alert("Wellcom to falana dimkana Bank");
var pin = parseInt(prompt("Enter your pin code"));
var balance = 2000;
if (pin == 1234) {
    var lang = parseInt(prompt("press 1-اردو - English -2"))
  if (lang == 1) {
    var choice = parseInt(prompt("دبائیں 1:واپس لیں، 2:جمع کریں، 3:بیلنس چیک کریں"))
    switch (choice) {
        case 1:
                var Amount = parseInt(prompt("اپنی واپسی کی رقم درج کریں۔"))
                if (Amount <= balance){ 
                    var newAmount = balance - Amount
                    document.write("<h3>آپ کا نیا بیلنس ہے۔"+ newAmount+"</h3>");  
                }
                else{
                    document.write("<h3>آپ کی رقم ناکافی ہے۔</h3>")
                }
                break;
                case 2:
                    var Amount = parseInt(prompt("اپنی اضافی رقم درج کریں۔"))
                        var newAmount = balance + Amount
                        document.write("<h3>آپ کا نیا بیلنس ہے۔" + newAmount+'</h3>');  
                    
                    break;
                    case 3:
                        document.write("<h3>آپ کا موجودہ بیلنس ہے۔" + balance+"</h3>");  
                    
                    break;
            default:
                document.write("<h3>دفعہ ہو جاو</h3>")
                break;
        }  
    }
  else if (lang == 2) {
        var choice = parseInt(prompt("press 1-Withdraw 2-added amount 3-balance enquire"))
        switch (choice) {
            case 1:
                    var Amount = parseInt(prompt("Enter your withdraw amount"))
                    if (Amount <= balance){ 
                        var newAmount = balance - Amount
                        document.write("<h3>your balance is"+ newAmount+"</h3>");  
                    }
                    else{
                        document.write("<h3>plz recharge your account</h3>")
                    }
                    break;
                    case 2:
                        var Amount = parseInt(prompt("enter your add new amonut"))
                            var newAmount = balance + Amount
                            document.write("<h3>Your new balance is " + newAmount +"</h3>");  
                        
                        break;
                        case 3:
                            document.write("<h3>Your Current Balance Is" + balance+"</h3>");  
                        
                        break;
                default:
                    document.write("<h3>Get lost</h3>")
                    break;
            }  
        }
    else(
        document.write("<h3>Get Lost , دفعہ ہو جاو</h3>")
    )
}
else(
document.write(" <h2>Invalid value</h2>")
)   