function calculate()
{
  var a,b,c,result,percentage;
  a=parseInt(entry.t1.value)
  b=parseInt(entry.t2.value)
  c=parseInt(entry.t3.value)
   result=(a+b+c);
   percentage=(a+b+c)/3;

    entry.t4.value=result;
    entry.t5.value=percentage;
      if(percentage > 33)
     {
      alert("you are pass.");
     }
     else
     {
      alert("you are fail.");
     }

}
function reset()
{
   var a,b,c,result,percentage;
  a=parseInt(entry.t1.value)
  b=parseInt(entry.t2.value)
  c=parseInt(entry.t3.value)
   result=(a+b+c);
   percentage=(a+b+c)/3;

    entry.t4.value=result;
    entry.t5.value=percentage
     if(percentage > 33)
     {
      alert("you are pass.");
     }
     else
     {
      alert("you are fail");
     }
}
