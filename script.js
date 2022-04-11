let propinas = 0;
let Totalpropinas = 0;
let totalcuenta = 0;

function calcular(){
   let Valorcompra = parseInt( document.getElementById('totalC').value);
   let porcentajes = parseInt( document.getElementById('porcen').value);
   propinas = porcentajes /100;
   Totalpropinas = Valorcompra * propinas ;
   totalcuenta = Valorcompra + Totalpropinas;
     document.getElementById('tc').innerHTML =Valorcompra;
     document.getElementById('pr').innerHTML =Totalpropinas;
     document.getElementById('pgr').innerHTML =totalcuenta;
   let validado = true;
   elementos = document.getElementsByClassName("inputFormu");
   for(i=0;i<elementos.length;i++){
     if(elementos[i].value == "" || elementos[i].value == null){
     validado = false
     }
   }
   if(validado){
         
      }else{
   alert("Ingrese los campos vacio")   
   }
  
}