function add(arr)
{
   var result=[]
   var k=arr.length
   for(i=0;i<(k-1);i++)
   {
     result[i]=arr[i]*arr[i+1]
   }
   return result
}
console.log(add([1,2,3,5,8,1]))
console.log(add([1,2,3,4,5]))