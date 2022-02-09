let prompt = require("prompt-sync")();

/*
* Create a new file, `rigged-dice.js`, which prompts the user first for a number of sides, then for a rigged number. The dice should roll the rigged number twice as frequently as the other numbers!
 */

let dice_side_number = Number(prompt("How many sides will the dice be today? "));
let rigged_number = Number(prompt("What number shall we rig today? "));

if (rigged_number < 0 && rigged_number > dice_side_number){
    console.log("rigged number should not exceed the number of sides of the dice")
    rigged_number = Number(prompt("What number shall we rig today? "));
};
let count = Math.ceil(Number(prompt("How many times would you like to throw the dice? ")))
// console.log(".....section 1 "+count)
let end_count = 0;
let rig_count = 0; 

if (rig_count > 3){
    rig_count = 0;
}

while (end_count < count){
    
    dice_roll = (((Math.random()*(`${dice_side_number}`))).toFixed(0));
    // console.log("whileloop",rig_count)

    if (rig_count === 2 || rig_count === 3){
        console.log(`${rigged_number}`)
    }else{
        console.log(dice_roll);
    }
    if (rig_count === 3){
        rig_count = 0;
    }
    end_count = end_count + 1; 
    rig_count++;
};








