function sumodd(limit)
{   var sum=0;
    for(i=limit;i>0;i--)
    {
        if(i%2===1){
              sum=sum+i;
        }
    }
    console.log(sum)
}
sumodd(10)
sumodd(7)
sumodd(11)