function pattern()
{
  var count=1
  
  for(i=1;i<5;i++)
  {
    str=''
    for(j=1;j<=i;j++)
    {   
         str+=`${count} `
         count++
    }
    console.log(str)
  }

}
pattern()