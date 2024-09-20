//====================PART ONE: Humble Beginnings====================//
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    felineComp: {
      name: "Frank",
      type: "Flea",
      belongings: ["small hat", "sunglasses"],
    },
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};

// create a loop that logs each item in Robin’s inventory
for (let i = 0; i < adventurer.inventory.length; i++) {
    console.log(adventurer.inventory[i]);
  }
// Test the method  
adventurer.roll();
adventurer.roll();
adventurer.roll();
adventurer.roll();

//====================PART TWO: Class Fantasy====================//
//Create the basic Character class
class Character {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    // Add the roll method to the Character class.
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  }
//Re-create Robin using the Character class!
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];

robin.companion = new Character("Leo");
robin.companion.type = "Cat";

robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

//Test the roll method for the characters
robin.roll();
robin.companion.roll();
robin.companion.companion.roll();
