function check(mark)
{ 
  if(mark<=100 && mark>=0){
                           if(mark<50){
                                  console.log("you are failed")
                                       }
                           else{
                                  console.log("you are passed")
                               }}
  else{
    console.log("ERROR!!!  enter a mark between 0 and 100")
     }
}
check(-1)
check(35)
check(66)
check(101)

