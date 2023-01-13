function check(totalmark)
{ 
  if(totalmark<=100 && totalmark>=0){
                           if(totalmark<50){
                                  console.log("you are failed")
                                       }
                           else if(totalmark>=50 && totalmark<60){
                                  console.log("you got E grade")
                               }
                               else if(totalmark>=60 && totalmark<70){
                                console.log("you got D grade")
                             }
                             else if(totalmark>=70 && totalmark<80){
                                console.log("you got C grade")
                             }
                             else if(totalmark>=80 && totalmark<90){
                                console.log("you got B grade")
                             }
                             else if(totalmark>=90 && totalmark<=100){
                                console.log("you got A grade")
                             }
                            
                            
                            }
  else{
    console.log("ERROR!!!  enter a mark between 0 and 100")
     }
}
check(-1)
check(101)
check(35)
check(60)
check(50)
check(70)
check(80)
check(90)
check(100)
