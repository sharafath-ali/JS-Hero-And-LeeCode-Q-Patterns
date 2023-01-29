function sub(a,b)
{
  console.log(a-b)
}
function add(a,b)
{
    console.log(a+b)
}
function mul(a,b)
{
    console.log(a*b)
}
function div(a,b)
{
    console.log(a/b)
}
class oper{
    main(n,a,b)
    {
        if(n===1)
        {
            add(a,b)
        }
        else if(n===2)
        {
            sub(a,b)

        }
        else if(n===3)
        {
            mul(a,b)
        }
        else if(n===4)
        {
            div(a,b)
        }
        else
        {
          console.log('enter n between 0 and 5')
        }
    }
}
obj=new oper()
obj.main(1,20,30)
obj.main(2,20,30)
obj.main(3,20,30)
obj.main(4,200,20)
