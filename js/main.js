var dzisiaj = new Date();
/*var rok=dzisiaj.getUTCFullYear();
var miesiac=dzisiaj.getMonth();
var dzien=dzisiaj.getDate();
var dzien_tyg=dzisiaj.getDay();*/

window.addEventListener('load', function(){
  document.querySelector('.year').innerText=dzisiaj.getUTCFullYear();
  document.querySelector('.day').innerText=dzisiaj.getDate();
  dzisiaj.jakiDzienTyg();
  dzisiaj.jakiMonth();
  dzisiaj.doKonca();
  dzisiaj.tydzienRoku();
  
},false);

Date.prototype.czyPrzestepny = function(){
   var teraz= new Date();
   var rok=teraz.getYear();
   if(rok % 4 === 0 && rok % 100 !== 0 || rok % 400 === 0)
       return true;
   else
       return false;
};

Date.prototype.jakiDzienTyg = function(){
	var teraz = new Date();
	teraz = teraz.getDay();
	var dzientyg= new Array(7);
	dzientyg[1]="Poniedziałek";
	dzientyg[2]="Wtorek";
	dzientyg[3]="Środa";
	dzientyg[4]="Czwartek";
	dzientyg[5]="Piątek";
	dzientyg[6]="Sobota";
	dzientyg[0]="Niedziela";
	
	document.querySelector(".day-name").innerText=dzientyg[teraz];
	
}

Date.prototype.jakiMonth = function(){
	var teraz = new Date();
	teraz = teraz.getMonth();
	var miesiac= new Array(12);
	miesiac[0]="Styczeń";
	miesiac[1]="Luty";
	miesiac[2]="Marzec";
	miesiac[3]="Kwiecień";
	miesiac[4]="Maj";
	miesiac[5]="Czerwiec";
	miesiac[6]="Lipiec";
	miesiac[7]="Sierpień";
	miesiac[8]="Wrzesień";
	miesiac[9]="Październik";
	miesiac[10]="Listopad";
	miesiac[11]="Grudzień";
	
	
	document.querySelector(".month").innerText=miesiac[teraz];
	
}

Date.prototype.doKonca = function(){
	var teraz=new Date();
	var start=new Date(teraz.getUTCFullYear(),0,1,0,0,0,0);
	var ile_dni=(teraz.getTime()-start.getTime())/1000/60/60/24;
	ile_dni=Math.ceil(ile_dni);
	document.querySelector(".days-left").innerText=ile_dni+"/";
	dzisiaj.czyPrzestepny()? document.querySelector(".days-left").innerText+="366" : document.querySelector(".days-left").innerText+="365";
	
}

Date.prototype.tydzienRoku = function(){
	var obecnyr=new Date();
	obecnyr=obecnyr.getUTCFullYear();
	var poczatek= new Date(obecnyr,0,1,0,0,0,0);
	var teraz= new Date();
	var iloscMs=teraz.getTime()-poczatek.getTime();
	var odpowiedz=iloscMs/1000/60/60/24/7;
	odpowiedz=Math.ceil(odpowiedz);
	document.querySelector('.week').innerText="Tydzień "+odpowiedz;
}

