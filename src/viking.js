// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let aVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let aViking = this.vikingArmy[aVikingIndex];

    let aSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let aSaxon = this.saxonArmy[aSaxonIndex];

    const answerFonction = aSaxon.receiveDamage(aViking.strength);

    if (aSaxon.health <= 0) {
      this.saxonArmy.splice(aSaxonIndex, 1);
    }

    return answerFonction;
  }

  saxonAttack() {
    let aVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let aViking = this.vikingArmy[aVikingIndex];

    let aSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let aSaxon = this.saxonArmy[aSaxonIndex];

    const answerFonction = aViking.receiveDamage(aSaxon.strength);

    if (aViking.health <= 0) {
      this.vikingArmy.splice(aVikingIndex, 1);
    }

    return answerFonction;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
