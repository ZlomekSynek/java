function obejrz(){
    let a=parseInt(document.getElementById("jeden").value)
    let b=parseInt(document.getElementById("dwa").value)
    while(a!==b){
        if(a>b){
            a=a-b
        }
        else{
            b=b-a
        }
    }
    document.getElementById("euklidesWynik").value=a
}
