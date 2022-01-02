// Game States
// "WIN" - Player robot has defeated all robots
// * Fight all enemy robots
//       - how to face robot? enemyName in fight function
// * Defeat all enemy robots
//       - how to defeat? reduce enemyHealth with playerAttack in fight function
// "LOSE" - Player robot's health is 0 or less

// player variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// enemy robot variables
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// fight function
var fight = function(enemyName) {
  // Conditional statement
  while(playerHealth > 0 && enemyHealth > 0) {
  // ask player if they'd like to fight or run
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  // if player choses to fight, fight
  if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      break;
    } 
    else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } 
    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playerMoney);
      console.log("You have " + playerMoney + " coins remaining.");
      break;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
    // if player did not choose Fight or Skip in prompt
  } else {
    window.alert("You need to pick a valid option. Try again!");
  }
 }
};

// for loop
for(var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));

  // assigning fight function argument with array
  var pickedEnemyName = enemyNames[i];
  // reset enemyHealth so the loop continues through all three names in the array
  enemyHealth = 50;
  // debugger to check on progress
  debugger;
  // pass pickedEnemyName through fight function
  fight(pickedEnemyName);
  }

  else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }
}