function tax(income)
{  var tax=0
    if(income<=250000)
    {
        console.log('no need to pay tax')
    }
    else if(income>250000 && income<=500000)
    {
        console.log((income/100)*5)

    }
    else if(income>500000 && income<=1000000)
    {
        console.log((income/100)*10)
    }
    else if(income>1000000 && income<=5000000)
    {
        console.log((income/100)*20)
    }

}
tax(249999)
tax(499999)
tax(500001)
tax(2049000)