function second(arr)
{
       var max=arr[0];
       var smax=0;
       for(i=0;i<arr.length;i++)
       {
          for(j=i+1;j<arr.length;j++)
          {
            if(arr[j]>max)
            {
              if(max>smax)
              {
              smax=max
              }
              max=arr[j]
            }
            
        }
        if(arr[arr.length-1]>smax)
        {
            smax=arr[arr.length-1]
        }
        }
        return [max,smax]
}
console.log(second([10,30,2,8,49,359]))