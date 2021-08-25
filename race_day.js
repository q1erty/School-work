let raceNumber = Math.floor(Math.random() * 1000); // random whole numbers from 0(inclusive) to 1000(exclusive)
let early = false;// 9:30
let age = 18;
                            
if (early && age > 18) {                            
  raceNumber += 1000;                          
}
if (early && age > 18) {
  console.log(`Race will begin at 9:30, your race number is: ${raceNumber}.`);
  }
else if (!early && age > 18) {
  console.log(`Race will begin at 11:00, your race number is: ${raceNumber}.`);
}
else if (age < 18) {
  console.log(`Race will begin at 12:30, your race number is: ${raceNumber}.`);
}
         else {
           console.log("See the registration desk.");
         }
  
