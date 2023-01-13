var average = function(salary) {
    var length=salary.length
    var sum=0;
    minValue = Math.min(...salary);
    maxValue = Math.max(...salary);
    console.log(maxValue)
    console.log(minValue)
    for(i=0;i<length;i++){
        if(salary[i]!=minValue ){
            if(salary[i]!=maxValue){
        sum=sum+salary[i];
            }
        }
    }
    return sum/(length-2)
    
};
console.log(average([100,400,555,6]))