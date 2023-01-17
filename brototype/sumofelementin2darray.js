//Array=[[3,4,5,6],[5,6,8,6,9],[8,9]]
//l=Array[1].length
//console.log(l)


function sum(arr)
{
 let s=0
 l=arr.length
 console.log(l)
 for(i=0; i<l;i++)
 {
  k=arr[i].length
  console.log(k)
  for(j=0;j<k;j++)
  {
  s=s+arr[i][j]
  }

 }
 return s
}
console.log(sum([[6,6],[5]]))



function add(str)
{ var sum=0
 arr=str.split('+')
 l=arr.length
 for(i=0;i<l;i++)
 {
  sum+=arr[str(i)]
 }
 return sum
}