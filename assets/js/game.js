// what is the players name
var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


// Game States
// "WIN" - Player robot has defeated all enemy-robots
//   * Fight all enemy-robots

//   * Defeat each enemy-robot
        // "LOSE" - Player robot's health is zero or less

// creates function named "fight"
var fight = function(enemyNames) {
    // repeat and exercise as long as the enemy-robot is alive
    while (enemyHealth > 0 && enemyHealth > 0) {

        // alert players that they are starting the round
        window.alert("Welcome to Robot Gladiators!");
    
        var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter 'FIGHT' or 'SKIP' to choose.")
        console.log(promptFight);

        // if player choses to skip
        if (promptFight === "skip" || promptFight ==="SKIP") {
            console.log(promptFight)
            // confim player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney -10;
            console.log("playerMoney", playerMoney)
            break;
            }
        } 

        //if player chooses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
        );
        
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyNames + " has died!");
            break;
        }
        else {
            window.alert(enemyNames + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        //check players health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        }

        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player choses to skip
        if (promptFight === "skip" || promptFight ==="SKIP") {
            console.log(promptFight)
            // confim player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney -10;
            console.log("playerMoney", playerMoney)
            break;
            }
        } 
        //if no (false), ask question again by running fight () again
        else fight();
        
        } else {
        window.alert("You need to choose a valid option. Try again!");
        
        }
    }
    
};


// execute function
for(var i = 0; i < enemyNames.length; i++) {
    
    var pickedEnemyNames = enemyNames[i];
    
    enemyHealth = 50;
    // call fight function with enemy-robot
    fight(pickedEnemyNames);
}
