let first = "Vikia";
let second = "tori";
function insertion (a,b,c)
{
    let final = "";
    for (let i = 0; i < c; i++){
        final += a[i];
    }
    for (let j = 0; j < b.length; j++){
        final += b[j];
    }
    for (let k = c; k < a.length; k++){
        final += a[k];
    }   
    return final;
}
console.log(insertion(first,second,3));