//var A, B,C,D,E,F;
var L = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
var str ="";
function chyslo()
{
    let N = Math.floor(Math.random() * 10) + 1;
    for(let i = 0; i < N; i++){
        let B;
           if( i == 0)
            {
                B = L[Math.floor(Math.random() * (L.length - 1)) + 1]
            }
            else 
            {
                B = L[Math.floor(Math.random() * L.length)]
            }
        str += B;
    }
    let D = console.log(N);
    return D, str;
}
console.log(chyslo());