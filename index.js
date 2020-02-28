
document.body.style.fontSize = "1.5rem";

var imgbb = document.getElementsByTagName("img");
for(var i = 0; i <imgbb.length; i++){
imgbb[i].height = "300" ;
}

var text = document.getElementById("p1");
text.innerHTML = "Domaće životinje su one životinje koje čovjek pripitomljava i uzgaja radi koristi i razonode, a koje i same imaju koristi od takvetrajne zajednice sa čovjekom jer su zaštićene u borbi za opstanak.Da bi se neka životinja smatrala domaćom, potrebno je ispuniti tri uvjeta. Prvi je uvjet da životinja posjeduje osobine koje su čovjeku korisne,drugi da je privržena i poslušna čovjeku i treći da se jedinke redovito razmnožavaju pod čovjekovim nadzorom ";

var text = document.getElementById("p2");
text.innerHTML = "Magarac kakvog danas poznamo potječe od divljih predaka iz Afrike, nubijskog i somalijskog divljeg magarca. Nubijski divlji   magarac potječe s područja Sjeverne Afrike (današnje Eritreje), a somalijski divlji magarac s juga Eritreje i sjeverne Somalije. Magarac je udomaćen prije osam tisuća godina. U trećem tisućljeću pr.Kr. magarci se šire Azijom, a ratovi i trgovina, posebno ‹›put svile››, dovode magarce i na područje Europe, najvjerovatnije prije tri do četiri tisuće godina prije kris";

var text = document.getElementById("p3");
text.innerHTML = " Domaćim govedom, često jednostavno samo govedom, nazivaju se domesticirani potomci divljeg goveda (Bos taurus). Domesticiranje je počelo prvo radi mesa, a kasnije radi mlijeka i njihove snage korištene za vuču.";





    var audio = document.getElementById("audio");
var img = document.getElementById("theImage");

document.addEventListener("click", function(e){
   if( e.target === img ){
     audio.src = "zvukkonja.mp3";
     audio.play();
   }
   else{
    audio.src = "zvukkonja2.mp3";
    audio.play();
  }
},false);

  var text = document.getElementById("p4");
 text.innerHTML = "Domaći konj (konj, lat. Equus (Equus) caballus; sin. Equus ferus caballus, Equus caballus caballus, Equus caballus) je veliki četveronožni  sisavac, pripadnik roda Equus. Konji su odavno bili jedna od najvažnijih domaćih životinja  koja se uzgaja u vrlo velikom broju raznih pasmina, a živi širom svijeta.";

 function myFunction() {
  var txt = "";
  if (document.getElementById("id1").validity.rangeOverflow) {
    txt = "Value too large";
  } else {
    txt = "Input OK";
  } 
  document.getElementById("demo").innerHTML = txt;
}