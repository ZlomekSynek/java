//losowanie liczby
var wylosowanaliczba=Math.floor(Math.random()*100)+1;
//liczba prób
var iloscprob=0
function sprawdzLiczbe(){
    iloscprob++;
    dane=document.getElementById('liczba')
    if(dane.value==wylosowanaliczba){
        alert("Wygrałeś. Ilość prób to: "+iloscprob)
    }
    else if(dane.value<wylosowanaliczba){
        alert("Za mała liczba")
    }
    else{
        alert("Za duża liczba")
    }
}