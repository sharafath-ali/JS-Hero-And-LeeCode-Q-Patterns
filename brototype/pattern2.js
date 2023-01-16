function pattern()
{
  for(i=1;i<5;i++)
  {
    str=''
    for(j=1*i;j<=i;j++)
    {   
        //for(k=j+1;k<=i;k++)
        //{
         str=str+' '+j
        //}
    }
    console.log(str)
  }

}
pattern()