function pala(str)
{   str1=str.toUpperCase()
    l=str1.length
    lcon=l%2
    lce=Math.ceil(l/2)
    if(lcon===0)
    { 
      var lstr=str1.substr(lce)
      var fstr=str1.substr(0,lce)
      fr=reverseString(fstr);
      if(fr===lstr)
      {
        return 'it is a pal'
      }
      else
      {
        return 'it is not'
      }
    }
    else
    { 
      var lstr=str1.substr(lce)
      lce=lce-1
      var fstr=str1.substr(0,(lce))
      fr=reverseString(fstr);
      if(fr===lstr)
      {
        return 'it is a pal'
      }
      else
      {
        return 'it is not'
      }
    }

}
console.log(pala('malayalam'))
console.log(pala('m1allam1'))
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
