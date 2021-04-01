cd = [31,28,31,30,31,30,31,31,30,31,30,31];
let count = 0;
function daysamount(a,b,c)
{   
    let count = 0;
    for(let i = 0; i < b-1; i++)
        {
          if (c % 4 == 0 && i == 1)
          {
            count += cd[i] + 1;
            //count += a+1;
          }
         else 
          {
            count += cd[i];
            //count += a;
          } 
        }
        count += a ;
    return count;
}
console.log(daysamount(5,3,2021));