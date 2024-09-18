import { jegkremek } from "./fagyi";

document.addEventListener('DOMContentLoaded', () => {
  const keres = document.getElementById('fagyi');

  document.getElementById("jelszo").addEventListener('input', (e) => {
    document.getElementById('jelszoHossz').innerHTML = e.currentTarget.value.length + "/8";
  })

  document.getElementById('fagyiForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    
    
    let nev = document.getElementById('nev').value;
    if (nev.split(' ').join('') == '') {
      throw new Error("A név nincs kitöltve")
    }
  })
  
  
  
  keres.addEventListener('change', (e)=>{
    for(let fagyi of jegkremek){
     if(e.currentTarget.value == fagyi.nev){
      e.currentTarget.style.backgroundColor = 'green'
      document.getElementById("fagyiAr").innerHTML = "A fagylalt ára: " + fagyi.ar;
      break
     }
     else if (e.currentTarget.value != fagyi.nev || e.currentTarget.split(' ').join('') != '')
     {
      e.currentTarget.style.backgroundColor = 'yellow'
      document.getElementById("fagyiAr").innerHTML = "Beszerzés folyamatban";
     }
   }
 })


 
  
})