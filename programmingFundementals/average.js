let n = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let total =0;

function sum(a, b) {
    return a+b;
}
function divide(a,b) {
    return a/b;
}


for (i=0; i<n.length;i++){

    total= sum (total, n[i]);
}

let average= divide (total, n.length);

console.log (n);
console.log (`SUM: ${total}`);
console.log (`TOTAL: ${n.length}`);
console.log (`MEAN: ${average}`);