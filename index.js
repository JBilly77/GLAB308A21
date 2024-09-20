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
    static MAX_HEALTH = 100;

    constructor(name) {
      this.name = name;
      this.health = Character.MAX_HEALTH;
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

//====================PART THREE: Class Features====================//
//Create an Adventurer class
class Adventurer extends Character {
    static ROLES = ["Warrior", "Fighter", "Healer", "Wizard", "Teamwork"];
    constructor(name, role) {
      super(name);
      // check to the constructor of the Adventurer class that ensures the given role matches one of these values
      if (!Adventurer.ROLES.includes(role)) {
        throw new Error(`Invalid role: ${role}. Must be one of: ${Adventurer.ROLES.join(", ")}`);
      }
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
      this.xp = 0;
      this.level = 1;
    }
  
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  
    // Other atttributes
    rest() {
      console.log(`${this.name} is resting...`);
      this.health = 100;
    }
  
    gainXp(amount) {
      this.xp += amount;
      if (this.xp >= 100) {
        this.levelUp();
      }
    }
  
    levelUp() {
      this.level++;
      this.xp = 0;
      console.log(`${this.name} leveled up to level ${this.level}!`);
    }
  }

// Create the Companion class
class Companion extends Character {
    constructor(name, type) {
      super(name);
      this.type = type;
    }
  
    // Companion attributes
    follow() {
      console.log(`${this.name} is following ${this.companion.name}...`);
    }

    loyalty() {
        console.log(`${this.name} is loyal to ${this.companion.name}...`);
      }
}

// Update the declaration of Robin and companions to use the new classes
const robin1 = new Adventurer("Robin", "Warrior");
robin1.inventory.push("sword", "potion", "artifact");

const leo1 = new Companion("Leo", "Cat");
leo1.companion = new Companion("Frank", "Flea");
leo1.companion.inventory.push("small hat", "sunglasses");

robin1.companion = leo1;

// Test the class features
robin1.scout();
robin1.rest();
robin1.gainXp(50);

leo1.follow();
leo1.loyalty();
