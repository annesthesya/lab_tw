setInterval(()=>{
  alert("Mai doriti sa finalizati comanda?");
},60000);

function anunt(event){
  alert("Ai apasat pe un "+event.currentTarget.nodeName+"!");
  event.stopPropagation();
  document.getElementById('popup').style.display="none";
}

function PopUp(hideOrshow) {
  if (hideOrshow == 'hide') 
    document.getElementById('popup').style.display = "none";
  else 
    document.getElementById('popup').style.display = "block";
}
function PopUpTimeout (){
  setTimeout(function () {
      PopUp('show');
  }, 3500);
}

function Card(){
  document.getElementById('pcard').style.display = "block";
  document.getElementById('card').value=true;
  document.getElementById('cash').value=false;
}
function Cash(){
  var x = document.getElementById('pcard').style.display = "none";
  document.getElementById('card').value=false;
  document.getElementById('cash').value=true;
}

function Address(){
    var x = document.getElementById('address');
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
}

function validate(){
  var nr=Math.floor(Math.random()*10000 + 100000)
  var today=new Date();
  var dd=String(today.getDate()).padStart(2, '0');
  var mm=String(today.getMonth()+1).padStart(2, '0');
  var yyyy=today.getFullYear();
  today=mm +'.'+dd+'.'+yyyy;
  console.log("Data efectuarii comenzii #",nr,": ", today);

  if(document.comanda.nume.value==""){
    alert("Va rugam dati un nume!");
    document.getElementById('nume').style.backgroundColor="#90EE90";
    document.comanda.nume.focus();
    return false;
  }
  else {
    var renume=/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
    if (document.comanda.nume.value.match(renume)===false){
      alert("Numele este invalid!");
      return false;
    }
  }
  localStorage.setItem("nume",document.comanda.nume.value);
  console.log("Nume: ", localStorage.getItem("nume"));

  if(document.comanda.email.value==""){
    alert("Va rugam introduceti o adresa de email!");
    document.getElementById('email').style.backgroundColor="#90EE90";
    document.comanda.email.focus();
    return false;
  }
  else {
    var reemail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    if (document.comanda.email.value.match(reemail)===false){
      alert("E-mail-ul este invalid!")
      return false;
      }
  } 
  localStorage.setItem("email",document.comanda.email.value);
  console.log("Adresa de email:", localStorage.getItem("email"));

  if(document.comanda.adresa.value==""){
    alert("Va rugam introduceti o adresa!");
    document.getElementById('adresa').style.backgroundColor="#90EE90";
    document.comanda.adresa.focus();
    return false;
  }
    else {
    var readr = /^[a-zA-Z0-9\s,'-]*$/; 
    if (document.comanda.adresa.value.match(readr)===false){
      alert("Adresa este invalida!");
      return false;
    }
  }
  localStorage.setItem("adresa",document.comanda.adresa.value);
  console.log("Adresa: ", localStorage.getItem("adresa"));

  if(document.comanda.oras.value==""){
    alert("Va rugam introduceti orasul!");
    document.getElementById('oras').style.backgroundColor="#90EE90";
    document.comanda.oras.focus();
    return false;
   } 
   else {
    var reoras = /^[a-zA-Z0-9\s,'-]*$/; 
    if (document.comanda.oras.value.match(reoras)===false){
      alert("Orasul este invalid!");
      return false;
    }
  }
  localStorage.setItem("oras",document.comanda.oras.value);
  console.log("Oras:", localStorage.getItem("oras"));

  if(document.comanda.judet.value==""){
    alert("Va rugam introduceti judetul sau sectorul!");
    document.getElementById('judet').style.backgroundColor="#90EE90";
    document.comanda.judet.focus();
    return false;
  }
  else {
    var rejudet = /^[a-zA-Z0-9\s,'-]*$/; 
    if (document.comanda.judet.value.match(rejudet)===false){
      alert("Judetul este invalid!");
      return false;
    }
  }
  localStorage.setItem("judet",document.comanda.judet.value);
  console.log("Judet: ",localStorage.getItem("judet")); 

  if(document.comanda.cp.value==""){
    alert("Va rugam introduceti codul postal!");
    document.getElementById('cp').style.backgroundColor="#90EE90";
    document.comanda.cp.focus();
    return false;
  }
  else {
    var recp = /^\\d{6}$/; 
    if (document.comanda.cp.value.match(recp)===false){
      alert("Codul postal este invalid!");
      return false;
    }
  } 
  localStorage.setItem("cp",document.comanda.cp.value);
  console.log("Cod postal: ",localStorage.getItem("cp"));

  if(document.comanda.cnume.value==""){
    alert("Va rugam introduceti numele detinatorului cardului!");
    document.getElementById('cnume').style.backgroundColor="#90EE90";
    document.comanda.cnume.focus();
    return false;
  }   
  else {
    var recnume = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
    if (document.comanda.cnume.value.match(recnume)===false){
      alert("Numele detinatorului cardului este invalid!");
      return false;
    }
  }
  localStorage.setItem("cnume",document.comanda.cnume.value);
  console.log("Numele detinatorului cardului: ",localStorage.getItem("cnume"));

  if(document.comanda.cnum.value==""){
    alert("Va rugam introduceti numarul cardului!");
    document.getElementById('cnum').style.backgroundColor="#90EE90";
    document.comanda.cnum.focus();
    return false;
  }   
  else {
    var recnum = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    if (document.comanda.cnum.value.match(recnum)===false){
      alert("Numele detinatorului cardului este invalid!");
      return false;
    }
  }
  localStorage.setItem("cnum",document.comanda.cnum.value);
  console.log("Numele detinatorului cardului: ",localStorage.getItem("cnum"));

  if( document.comanda.luna.value==0){
    alert("Va rugam selectati luna de expirare a cardului!");
    return false;
  } 
  localStorage.setItem("luna",document.comanda.luna.value);
  console.log("Luna expirarii cardului: ",localStorage.getItem("luna"));

  if( document.comanda.an.value==0){
    alert("Va rugam selectati anul de expirare a cardului!");
    return false;
  } 
  localStorage.setItem("an",document.comanda.an.value);
  console.log("Anul expirarii cardului: ",localStorage.getItem("an"));

  if( document.comanda.cvv.value==""){
    alert("Va rugam introduceti codul CVV al cardului!");
    document.comanda.cvv.focus();
    return false;
  } 
  return true;
}

function multumim(){
  document.getElementById("mp").classList.add("multumim");
  var m = document.createElement("h1");
  m.innerHTML = "Va multumim pentru comanda!";
  document.getElementsByClassName("main")[0].appendChild(m);
}

