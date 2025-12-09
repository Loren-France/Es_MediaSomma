function mediasomma() {
let output="";
let q=document.getElementById("numeri").value;
let num=[];

for (let i=0;i<q;i++) {
    num[i]=prompt("Inserire il "+(i+1)+"o numero");
}

let somma=somma(num);

let media=media(somma,num);

document.getElementById("output").innerHTML = "La somma dei numeri inseriti è: "+somma+"<br>"+"La media dei nuemri inseirti è: "+media;

}

function somma(num) {
let somm=0;

    for (let i=0;i<num.lenght;i++) {
        somm=somm+num[i];
    }

    return somm;
}

function media(somma,num) {

    let media=somma/num.lenght;

    return media;
}