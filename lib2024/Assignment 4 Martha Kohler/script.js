//attempted number validation function defining entry must be numeric and if not to display Invalid Entry // 
function validate(){
  var num=document.form.num.value;
  if (isNaN(num)){
    document.getElementById("numloc").innerHTML="Invalid Entry";
    return false;
  }else{
    return true;
    }
  }

// defining the click to action convert or clear field // 
document.getElementById('convert').onclick = tempConvert;
document.getElementById('reset').onclick = clearForm;

//conversion function //
function tempConvert() {
    
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;
  
  if (fahrenheit != '') {
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    } else {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    }
  

// limiting the decimal value displayed // 
document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
}

//reset form function //
function clearForm() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
} 

