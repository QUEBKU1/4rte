function oblicz(){
    let ilosc=parseInt(document.getElementById("ilosc").value);
    let rodzaj=document.getElementById("rodzaj").value;
    let koszt=0;
    if(rodzaj=="dolar"){
        koszt=ilosc*0.23;
    }
    else if(rodzaj=="euro"){
        koszt=ilosc*0.21;
    }
    else if(rodzaj=="funt"){
        koszt=ilosc*0.19;
    }
    
    document.getElementById("wynik").value=koszt;
}