let prompt = require("prompt-sync")(); 

/*
## Stretch goals

* Create a new file, `custom-roll.js`, that prompts the user for how many sides the dice should have, then simulates a roll of a dice with that many sides.*/

let dice_side_number = Number(prompt("How many sides will the dice be today? "));
let dice_roll = (((Math.random()* (`${dice_side_number}`)) + 1).toFixed(0));

console.log(`The dice rolls ..... ${dice_roll}`);