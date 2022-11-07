let jonSnowHealth = 100;

//converting to string
//jonSnowHealth = String(jonSnowHealth);
//jonSnowHealth = toString(jonSnowHealth)

//converting to number
jonSnowHealth = parseInt(jonSnowHealth);

//converting to Boolean
//console.log(Boolean(jonSnowHealth));

//converting using string coercion/concatenation
//jonSnowHealth = jonSnowHealth + " health";

//jonSnowHealth = 'health - ' + jonSnowHealth

console.log(jonSnowHealth);

let theWinnerIs = "Jamie is the winner";

//replace
//theWinnerIs = theWinnerIs.replace("Jamie", "Jon");

let newWinner = theWinnerIs.toLowerCase().replace("jamie", "Jon");

//console.log(theWinnerIs);

if (newWinner.includes("Jon")) {
  console.log("replaced successfully");
} else {
  console.log("not replaced");
}

console.log(newWinner);

//convert to kebab-case eg. jon-is-the-winner
//let newWinnerReplace = newWinner.replaceAll(" ", "-");

//let newWinnerLower = newWinner.toLowerCase()
//let newWinnerLowerSplit = newWinnerLower.split(" ")
//let newWinnerKebab = newWinnerSplit.join("-")

let newWinnerKebab = newWinner.toLowerCase().split(" ").join("-");

console.log(newWinnerKebab);

//console.log(newWinnerReplace);

//functions

function isJonAlive() {
  if (jonSnowHealth > 0) {
    console.log(`Jon is alive!`);
  } else {
    console.log(`RIP Jon Snow`);
  }
}

isJonAlive();

//arrow-function
//const isJonAlive = function

//create a function to launch attack on Jon

function surpriseAttack(attack) {
  jonSnowHealth -= attack;
  isJonAlive();
}

surpriseAttack(20);
surpriseAttack(10);
surpriseAttack(40);
surpriseAttack(40);
//let remainingPlushShield = surpriseAttack(18) + 50;

//console.log(jonSnowHealth);
