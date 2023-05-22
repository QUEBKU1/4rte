function obliczModulo(){
    let liczba=parseInt(document.getElementById("liczba").value);
    if(liczba%3==0){
        document.getElementById("wynikModulo").value="liczba jest podzielna przez 3 - modulo";
    }else{
        document.getElementById("wynikModulo").value="liczba NIE jest podzielna przez 3 - modulo";
    }
}
function sumaCyfrLiczby(liczba){
    let sumaCyfr=(0);
    while(liczba>0){
        sumaCyfr=sumaCyfr+liczba%10;
        liczba=Math.floor(liczba/10);
    }
    return sumaCyfr;
}
function czyPodzielna(liczba){
    let sumaCyfr=0;
    do{
        sumaCyfr=sumaCyfrLiczby(liczba);
        liczba=sumaCyfr;
    }
    while (sumaCyfr>9)
    let wynik="liczba jest podzielna przez 3 - rekurencja"
    if(sumaCyfr==3 || sumaCyfr==6 || sumaCyfr==9){
        wynik="Liczba nie jest podzielna przez 3 - rekurencja";
    }
    return wynik;
}
function obliczRekurencja(){
    let liczba=parseInt(document.getElementById("liczba").value);
    let odpowiedz=czyPodzielna(liczba);
    document.getElementById("wynikRekurencja").value=odpowiedz;
}