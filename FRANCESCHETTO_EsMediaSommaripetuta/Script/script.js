function mediasomma() {
let output="";
let q=document.getElementById("numeri").value;
let som;
let med;
let num=[];

for (let i=0;i<q;i++) {
    num[i]=prompt("Inserire il "+(i+1)+"o numero");
    num[i]=parseInt(num[i]);
    if(isNaN(num[i])){
        output="Errore, un numero inserito non è un numero, reinserire"
    }
    else{
    }
}

som=somma(num);

med=media(som,num);

output= "La somma dei numeri inseriti è: "+som+"<br>"+"La media dei nuemri inseirti è: "+med;

document.getElementById("output").innerHTML = output;

}

function somma(num) {
let somm=0;

    for (let i=0;i<num.length;i++) {
        somm=somm+num[i];
    }

    return somm;
}

function media(som,num) {
let c=num.length;
let media;

    media=som/c;

    return media;
}