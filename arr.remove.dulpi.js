arr=[11,63,63,62,61,61]
function remove(arr)
{
 for(i=0;i<arr.length;i++)
 {
    for(j=(arr.length-1);j>i;j--)
    {
        if(arr[i]===arr[j])
        {
               arr.splice(j,1)
            
        }
    }
    console.log(arr)
}
console.log(arr)
}
remove(arr)
arr.splice(0,1)
console.log(arr)