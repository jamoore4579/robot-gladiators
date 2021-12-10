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

        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
        );
        
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyNames + " has died!");

            // award player money for winning
            playerMoney = playerMoney + 20;

            break;
        } else {
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
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

//function to start a new game
var startGame = function() {

    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    // execute function
    for(var i = 0; i < enemyNames.length; i++) {

        if (playerHealth > 0) {
            // alert players that they are starting the round
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1));
        
        var pickedEnemyNames = enemyNames[i];
        
        enemyHealth = 50;
        // call fight function with enemy-robot
        fight(pickedEnemyNames);
        }

        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    // after the loop ends, player is either out of health or enemies to fight
    endGame();
};

var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("The game has now ended. Let's see how you did!");
    }
    else {
        window.alert("You've lost your robot in a battle.");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come Back soon!")
    }
};

//play again
startGame()




