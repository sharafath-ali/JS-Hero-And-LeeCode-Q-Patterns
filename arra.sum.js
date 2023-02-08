var arr=[1,2,3,4]
function ae(arr)
{
var input=10
var sum=0
var j=1
for(i=0;i<arr.length;i++)
  {
    for(j=i+1;j<arr.length;j++)
    {
    sum=arr[i]+arr[j]
    if(sum===input)
    {
        console.log([arr[i],arr[j]])
    }
    
   }
  }
  return 0
}
ae(arr)