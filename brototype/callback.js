function myFilter(arr,iseven)
{
    let sum=0;
    for(i=0;i<arr.length;i++)
    {
    if(iseven(arr[i]))
    {
        sum+=arr[i]
    }
    
    }
console.log(sum)

}
function iseven(num){
 return num%2===0
}
myFilter([1,2,3,4,5],iseven)