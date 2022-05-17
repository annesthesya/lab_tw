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
}
function Cash(){
  document.getElementById('pcard').style.display = "none";
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
  const data=today;
  const id=nr;

  if(document.comanda.nume.value==""){
    alert("Va rugam dati un nume!");
    document.getElementById('nume').style.backgroundColor="#90EE90";
    document.comanda.nume.focus();
    return false;
  }
  const nume=document.comanda.nume.value;

  if(document.comanda.email.value==""){
    alert("Va rugam introduceti o adresa de email!");
    document.getElementById('email').style.backgroundColor="#90EE90";
    document.comanda.email.focus();
    return false;
  }
  const email=document.comanda.email.value;

  if(document.comanda.adresa.value==""){
    alert("Va rugam introduceti o adresa!");
    document.getElementById('adresa').style.backgroundColor="#90EE90";
    document.comanda.adresa.focus();
    return false;
  }
  const adresa=document.comanda.adresa.value;

  if(document.comanda.oras.value==""){
    alert("Va rugam introduceti orasul!");
    document.getElementById('oras').style.backgroundColor="#90EE90";
    document.comanda.oras.focus();
    return false;
   } 
  const oras=document.comanda.oras.value;

  if(document.comanda.judet.value==""){
    alert("Va rugam introduceti judetul sau sectorul!");
    document.getElementById('judet').style.backgroundColor="#90EE90";
    document.comanda.judet.focus();
    return false;
  }
  const judet=document.comanda.judet.value;

  if(document.comanda.cp.value==""){
    alert("Va rugam introduceti codul postal!");
    document.getElementById('cp').style.backgroundColor="#90EE90";
    document.comanda.cp.focus();
    return false;
  }
  const cp=document.comanda.cp.value;

  const newComanda={
    id:id,
    data:data,
    nume:nume,
    email:email,
    adresa:adresa,
    oras:oras,
    judet:judet,
    cp:cp
  }

  $.post({
    url:"http://localhost:3000/comenzi",
    data:newComanda
  })

  return true;
}

function getComenzi(){
  comenzi=[];
    $.get({
      url:"http://localhost:3000/comenzi"
    })
    .done((res)=>{
      comenzi=res;
    })
    .then(()=>{
      console.log(comenzi);
    })
}

function update(){
  const nume = document.getElementById("unume").value;

  const newComanda={
    id:"108568",
    data:"06.06.2021",
    nume:nume,
    email:"nume@email.com",
    adresa:"Strada Independentei nr 13",
    oras:"Timisoara",
    judet:"Timis",
    cp:"654321"
  }

  $.ajax({
    type: "PUT",
    url:"http://localhost:3000/comenzi?id=108568",
    data: newComanda
  });
}

function deleteComanda(){
  $.ajax({
    type: "DELETE",
    url:"http://localhost:3000/comenzi?id=102809"
  });
}

function notFound(){
  $.ajax({
    type:"GET",
    url:"http://localhost:3000/404",
    statusCode:{
      404: ()=>{
        document.write("NOT FOUND");
      }
    }
  })
}