function sum(arr1,arr2)
{  
   var results=[]
   m=arr1.length
   for(i=0;i<m;i++)
   {
    results[i]=[]
    for(j=0;j<arr1[i].length;j++)
    {
        results[i][j] = arr1[i][j] +arr2[i][j];
    }
   }
   console.log(results)
}
let arr1=[[1,5],[7,8]]
let arr2=[[1,5],[7,8]]
sum(arr1,arr2)
sum([[1,3,5],[5,7,8],[0,9,6]],[[4,6],[5,6,7],[4,7,8]])
