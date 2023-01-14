function median(arr)
{
 lg=arr.length
 lm=lg/2
 l=Math.ceil(lm)
 if(lg===1)
 {
  return arr[0]
 }
 else if(lg%2===1)
 {
   return arr[l-1]
 }

 else if(lg%2===0)
 {
 return (arr[l]+arr[l-1])/2
 }
}
console.log(median([1]))
