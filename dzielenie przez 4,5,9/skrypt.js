function obliczModulo(){
    let liczba=parseInt(document.getElementById("liczba").value);
    if(liczba%4==0){
        document.getElementById("wynikModulo").value="liczba jest podzielna przez 4 - modulo";
    }else {
        document.getElementById("wynikModulo").value="liczba NIE jest podzielna przez 4 - modulo";
    }
    

    if(liczba%5==0){
        document.getElementById("wynikModulo1").value="liczba jest podzielna przez 5 - modulo";
    }else{ 
        document.getElementById("wynikModulo1").value="liczba NIE jest podzielna przez 5 - modulo";
    }
    
    if(liczba%9==0){
        document.getElementById("wynikModulo2").value="liczba jest podzielna przez 9 - modulo";
    }else {
        document.getElementById("wynikModulo2").value="liczba NIE jest podzielna przez 9 - modulo";
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
