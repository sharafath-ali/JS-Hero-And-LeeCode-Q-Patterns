function neven(arr)
{
 var n=0
 for(i=0;i<arr.length;i++)
 {
    if(arr[i]%2===0)
    {
        n+=1
    }
 }
 console.log(n)
}
neven([1,2,4,6,8,9])
neven([12,22,42,62,83,92])
neven([21,62,14,46,28,39])
neven([14,23,41,216,83,39])