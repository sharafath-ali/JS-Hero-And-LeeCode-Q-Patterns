function week(n)
{
    switch(n){
        case 1:
            console.log("day=Sunday")
            break;
        case 2:
            console.log("day=monday")
            break;
        case 3:
           console.log("day=tuesday")
            break;
        case 4:
            console.log("day=wednesday")
            break;
        case 5:
          console.log("day=thursday")
          break;
        case 6:
          console.log('day=friday')
          break;
        case 7:
            console.log('day=saturday')
            break;
        default:
            console.log('error')
            break;

    }
}
week(2)
week(9)
week(6)