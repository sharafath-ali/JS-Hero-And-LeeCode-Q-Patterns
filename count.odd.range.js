var countOdds = function(low, high) {
    
    if(low%2==0 && high%2==0)
    {   
        return (high-low)/2
    }
    else if(low%2==1 &&  high%2==1)
    {
        return (high-low)/2+1
    }
    else if(low%2==1 && high%2==0)
    {
        return ((high)-(low-1))/2
    }
    else
    {
        return ((high+1)-low)/2
    }
}
console.log(countOdds(3,30))
console.log(countOdds(10,40))
console.log(countOdds(1,5))
console.log(countOdds(2,5))