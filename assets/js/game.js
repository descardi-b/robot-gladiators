var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyAttack, enemyHealth);

var fight = function() {
  window.alert("Welcome to Robot Gladiators!");

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
  
    // Remove enemy's health

    if (promptFight === "fight" || promptFight === "Fight" || promptFight === "FIGHT") {
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    }

    // Check enemy's health
    if (enemyHealth <== 0) {
        window.alert(enemyName + " has died!");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health remaining.");
    }

    // Remove player's health

    if (promptFight === "fight" || promptFight === "Fight" || promptFight === "FIGHT") {
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    }

    // Check player's health
    if (playerHealth <== 0) {
        window.alert(playerName + " has died!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health remaining.");
    }
  } 

    else if (promptFight === "skip" || promptFight === "Skip" || promptFight === "SKIP") {
     // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
    fight();
  }

fight();

// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
  console.log("Your player is still alive!");
}