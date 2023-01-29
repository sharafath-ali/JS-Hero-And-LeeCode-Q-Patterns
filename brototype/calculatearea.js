class Area
{
    circle(r)
    {
      console.log(3.14*r*r)
    }
    squire(l)
    {
      console.log(l*l)
    }
    rectangle(l,b)
    {
     console.log(l*b)
    }
    triangle(h,b)
    {
        console.log((h*b)/2)
    }
}
class MyClass extends Area
{   
    main()
    {
        
    }
}
var obj=new MyClass
obj.squire(2)
obj.triangle(2,2)
obj.rectangle(6,1)
obj.circle(3)
