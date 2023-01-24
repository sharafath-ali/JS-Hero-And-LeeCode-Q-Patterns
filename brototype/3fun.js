function main()
{
 var arr1=[[1,4,5],[4,6,8]]
 var arr2=[[1,6,6],[3,7,4]]
 arr=getarray(arr1,arr2)
 var results=addarray(arr[0],arr[1])
 displayarray(results)
}
function getarray(arr1,arr2)
{
 return [arr1,arr2]
}
function addarray(arr1,arr2)
{    
      
        var results=[]
        for(i=0;i<(arr1.length);i++)
        {
         results[i]=[]
         for(j=0;j<arr1[i].length;j++)
         {
             results[i][j] = arr1[i][j] + arr2[i][j];
         }
        }
        
        return results
     
}

function displayarray(results)
{
  console.log(results)
}
main()