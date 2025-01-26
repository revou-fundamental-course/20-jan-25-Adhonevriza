// Ini File Javascript

var pria = document.getElementById("pria")
var wanita = document.getElementById("wanita")
var berat_badan = document.getElementById("input-berat-badan")
var usia = document.getElementById("input-usia")
var tinggi_badan = document.getElementById("input-tinggi-badan")

function calculate(){
 
    if(usia.value=='' || berat_badan.value=='' || tinggi_badanvalue=='' || (pria.checked==false && wanita.checked==false)){
      modal.style.display = "block";
      modalText.innerHTML = `All fields are required!`;
  
    }else{
      hitung();
    }
  
  }

function hitung()
{
    function countBmi(){
        var p = [usia.value, tinggi_badan.value, berat_badan.value];
        if(pria.checked){
          p.push("pria");
        }else if(wanita.checked){
          p.push("wanita");
        }
      
        var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
            
        var result = '';
        if(bmi<18.5) {
          result = 'Underweight';
           }

        else if(18.5<=bmi&&bmi<=24.9) {
          result = 'Healthy';
           }

        else if(25<=bmi&&bmi<=29.9) {
          result = 'Overweight';
           }

        else if(30<=bmi&&bmi<=34.9) {
          result = 'Obese';
           }

        else if(35<=bmi) {
          result = 'Extremely obese';
           }
}