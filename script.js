let input = prompt("Enter your year of birth")

let numberInput = parseInt(input);

let chineseZodiac = (numberInput - 4) % 12;



switch(chineseZodiac) {
    case 1:
        console.log("You are a Rat");
        break;
    case 2:
        console.log("You are an Ox");
        break;
    case 3:
        console.log("You are a Tiger");
        break;
    case 4:
        console.log("You are a Rabbit");
        break; 
    case 5:
        console.log("You are a Dragon") 
        break; 
    case 6:
        console.log("You are a Snake") 
        break;
    case 7:
        console.log("You are a Horse") 
        break;
    case 8:
        console.log("You are a Monkey") 
        break;
    case 9:
        console.log("You are a Rooster") 
        break;
    case 10:
        console.log("You are a Dog") 
        break;
    case 11:
        console.log("You are a Pig") 
        break;
    default:    
        console.log("Your year of birth is incorrect")   
        break;         
}