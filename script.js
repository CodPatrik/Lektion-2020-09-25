// Hour
// Make a funtion that check for the following things and return a message
// If hour is between 6 and 12 : Good morning !
// If it is between 12 and 18 : Good afternoon !
// Otherwise: Good evening !


/*
if(condition){
    statement
} else if (another condition) {
    another statement
} else
    // All conditions except these two conditions above
    statement  
*/


// Jobba med klockan är lite komplicerat och ingen vill väl sitta här till
// efter 18 o kolla så det fungerar därför använder vi en variabel 
// som vi ger namnet clock

let clock=6;


// Lösning 1 mer rakt på
function checkTime2(clock){
    
    let message = "Good evening !"
    
    if (clock >= 6 && clock <=12) {
        message = "Good morning !"
    }else if(clock > 12 && clock <=18) {
        message = "Good afternoon !"
    }

    return message;
}

// Order return i en funktion betyder att programmet avbryter
// funktionen och hoppar över all kod som sedan finns skrivet
// i den funktionen.
// Programmet återgår till den position där funktionen anropades.


// En proffsigare lösning.
function checkTime(clock){
    
    if (clock >= 6 && clock <=12) {
        return "Good morning !"
    }else if(clock > 12 && clock <=18) {
        return "Good afternoon !"
    }
    return "Good evening !"

}


// Skapar en variabel som tar emot det som funktionen checkTime returnerar.
let meddelande = checkTime(clock);

// Visar meddelandet i konsollen.
console.log(meddelande);








