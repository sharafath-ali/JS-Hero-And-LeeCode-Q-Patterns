function mul(arr)
{
    var arr1=[]
    for(i=0;i<(arr.length-1);i++)
    {
        arr1[i]=arr[i]*arr[i+1]
    }
    console.log(arr1)
}
mul([1,2,3,4,5])
mul([1,6,4,7])
mul([3,9,4,5])