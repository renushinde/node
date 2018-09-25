//console.log("Hello");
//+++++ Example 1 +++++
/*function echo (str, num){
   for ( let i = 0; i<num; i++){
   	console.log(str);
   }
	
}
echo("Renu", 10);

// ++++Example 2++++
function average(scores){
   let total = 0;
   scores.forEach(function(score){
   	total += score;
   });

   let avg = total/scores.length;
   return Math.round(avg);
}
let scores = [7,9,1,2,3];
console.log(average(scores));*/

// Npm Cat-me & Npm Knock-knock Jokes
let catMe = require('cat-me');
let knockknock = require('knock-knock-jokes')
 
console.log(knockknock());
console.log(catMe());