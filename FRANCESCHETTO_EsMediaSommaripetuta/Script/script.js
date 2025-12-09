function mediasomma() {
let output="";
let q=document.getElementById("numeri").value;
let num=[];

for (let i=0;i<q;i++) {
    num[i]=prompt("Inserire il "+(i+1)+"o numero");
}

let somma=somma();



document.getElementById("output").innerHTML = output;

}