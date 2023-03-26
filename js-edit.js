function kirim() {
    var jumlah = document.getElementById("jumlah").value;
    var tombol;
    var pilihan = "";
  
    for (var i = 1; i <= jumlah; i++) {
      pilihan +=
        "<p> Pilihan " +
        i +
        " <input placeholder = 'Masukkan Pilihan' >" +"</p>";
    }
    tombol = "<p>" + '<button onclick="RadioButton()">OK</button>' + "</p>";
    document.getElementById("pilih").innerHTML = pilihan;
    document.getElementById("tombol").innerHTML = tombol;
}
  
function RadioButton() {
    var form = document.getElementById("pilih");
    var inputs = form.getElementsByTagName("input");
    var submit;
    var radios = "";
  
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == "text") {
        radios +=
          '<input type="radio" name="option" value="' + inputs[i].value +'">' +inputs[i].value + "<br>";
      }
    }
    submit = '<input type="submit" value="Submit" onclick="hasil()">';
    document.getElementById("submit1").innerHTML = submit;
    list.innerHTML = radios;
}
  
function hasil() {
      var testName = document.getElementById("nama");
      var form = document.querySelector("form");
      var result = document.getElementById("result");
      var jumlah = document.getElementById("jumlah").value;
      var form1 = document.getElementById("pilih");
      var inputs = form1.getElementsByTagName("input");
      var radios = "";
  
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "text") {
          radios +=
            inputs[i].value + ", ";
        }
      }
    
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var selectedOption = document.querySelector('input[name="option"]:checked');
    
        if (selectedOption) {
          result.textContent = "Halo, nama saya " + testName.value + ", saya mempunyai sejumlah " + jumlah + 
          " pilihan yaitu " + radios + ", dan saya memilih " + selectedOption.value + ".";
        } else {
          result.textContent = "Please select an option.";
        }
      });
}