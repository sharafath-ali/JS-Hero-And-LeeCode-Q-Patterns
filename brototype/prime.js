function isPrime(n)
{
 if(n===1)
{
  return false
}
 for(i=2;i<n;i++)
 {
  if(n%i===0)
 {
   
   console.log("Number is not prime")
   return 0
 }
 
 }
  console.log("Number is  prime")
  return true
 
}
isPrime(5)
isPrime(66)
isPrime(7)
isPrime(11)