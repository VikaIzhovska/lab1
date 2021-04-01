let str = "paraametr222";
let maxcount = "";
maxE = "";
console.log("\n",str,"\n");
for (let i = 0; i<str.length; i++)
{  
    let count = 0;
    let used = 0;
    for(let k = 0; k < i; k++)
    {
        if(str[i]==str[k])
        {
            used++;
        }
    } 
    if(used == 0)
    {
        for (let j = 0; j < str.length; j++)
        {
            if(str[j] == str[i])
            {
                count++;
            }
        } 
        if (count > maxcount)
        {
            maxcount = count; 
            maxE=str[i];          
        } 
        else if(count == maxcount)
        {
            maxE+=str[i];
        }    
        console.log("Елемент: %s "+"   Частота: %s",str[i],count);
    }            
}
console.log("\nЕлемент(-и) з максимальною частотою:");
for (let i = 0; i< maxE.length; i++) 
{
    console.log(maxE[i]);
}
console.log("\n");

