var iloscZn=8
var iloscCyfr=0
var iloscMaleL=0
var iloscWolnychZn=0
var iloscDuzeL=0
var iloscZnSpec=0

function iloscZnakow(){
    iloscZn=document.getElementById("iloscZnakow").value
    ustawWolne()
}
function wybCyfr(){
    iloscCyfr=document.getElementById("iloscCyfr").value
    document.getElementById("wybCyfr").value=iloscCyfr
    ustawWolne()
}
function wybMaleL(){
    iloscMaleL=document.getElementById("iloscMaleL").value
    document.getElementById("wybMaleL").value=iloscMaleL
    ustawWolne()
}
function wybDuzeL(){
    iloscDuzeL=document.getElementById("iloscDuzeL").value
    document.getElementById("wybDuzeL").value=iloscDuzeL
    ustawWolne()
}
function wybZnSpec(){
    iloscZnSpec=document.getElementById("iloscZnSpec").value
    document.getElementById("wybZnSpec").value=iloscZnSpec
    ustawWolne()
}
function ustawWolne(){
    iloscWolnychZn=iloscZn-iloscCyfr-iloscMaleL-iloscDuzeL-iloscZnSpec
    document.getElementById("wynik").value=iloscWolnychZn
    document.getElementById("iloscCyfr").max=+iloscCyfr+ +iloscWolnychZn
    document.getElementById("iloscMaleL").max=+iloscMaleL+ +iloscWolnychZn
    document.getElementById("iloscDuzeL").max=+iloscDuzeL+ +iloscWolnychZn
    document.getElementById("iloscZnSpec").max=+iloscZnSpec+ +iloscWolnychZn
}