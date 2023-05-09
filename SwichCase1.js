var Day=prompt("enter a number between 1 and 7");
Day=Number(Day)
switch(Day)
{
    case 1 :
         console.log("It's a monday");
         break;

    case 2 :
         console.log("It's a Tuesday");    
         break;
         
    case 3 :
         console.log("It's a Wednesday");    
         break;

    case 4 :
          console.log("It's a Thursday");   
          break;
          
    case 5 :
          console.log("It's a Friday");   
          break;

   case 6 :
          console.log("It's a Sturday");   
          break; 

    case 7 :
            console.log("It's a Sunday"); 
            break;

    default :
         console.log("Please enter a valid week") ;   
         break;                
}
