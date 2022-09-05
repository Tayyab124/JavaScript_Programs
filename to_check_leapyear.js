var lyear=2100
if(lyear % 4 === 0)
{   if(lyear % 100 === 0)
    {
       if(lyear % 400 ===0)
       {
        console.log("year" +lyear+ " is a leap year");
       }
       else{
        console.log("year "+lyear+ " is not a leap year");
        
       }
    }
    else{
        console.log("year "+lyear+ " is a leap year");
    }
   
}
else{
    console.log("year " +lyear+ " is not a leap year");
}