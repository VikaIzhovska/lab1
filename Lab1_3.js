let arr = [7,4,9,6,-4,1,2,-2,8,0,5,3,-5];
function insertionsort(array) {
    for (let j = 0; j < array.length; j++)
    {  
        let temparr = [];
        temparr[j] = array;
        for (let i = 1; i < array.length; i++){
            while(array[i] < array[i-1])
            {
                let temp = array[i-1];
                array[i-1]=array[i];
                array[i] = temp;
            }
        }   
    }
    return array;
}
console.log(insertionsort(arr));