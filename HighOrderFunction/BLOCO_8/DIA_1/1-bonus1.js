const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damageDragon = (dragon) => {
let maxDamage = 50;
let minDmg = 15
let trueDamage = Math.floor(Math.random() * (maxDamage - minDmg )) + minDmg ;  
return trueDamage;
}

const damageWarrior = (warrior) => {
let damageMinWarrior = warrior.strength;
let maxDamageWarrior = damageMinWarrior * warrior.weaponDmg;
let trueDamageWarrior = Math.floor(Math.random()* (maxDamageWarrior - damageMinWarrior)) +  damageMinWarrior;
return  warrior.damage = trueDamageWarrior;
}

const customMana = (mage) => {
let mana = mage.mana;
const minDamageMage = mage.intelligence;
const maxDamageMage = minDamageMage * 2;
const turnStats = {
  manaSpent: 0,
  damageDealt : 'Not enough mana...',
}
  if(mana > 15){
    const mageDamage = Math.floor((Math.random() * (maxDamageMage - minDamageMage)) + minDamageMage);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
  return turnStats;
}

const gameActions = {
warriorTurn: (damageWarrior)=>{
let warriorDamage = damageWarrior(warrior);
warrior.damage = warriorDamage;
dragon.healthPoints -= warriorDamage;
},

mageTurn: (customMana, warriorTurn)=>{
mage.damage = customMana(mage).damageDealt;
dragon.healthPoints -= mage.damage;
let manaGasta = customMana(mage).manaSpent;
mage.mana -= manaGasta
},

dragonTurn: (damageDragon) =>{
  let dragonDamage = damageDragon(dragon);
  mage.healthPoints -= dragonDamage;
  warrior.healthPoints -= dragonDamage;
  dragon.damage = dragonDamage;
},
turnResults: () => battleMembers,
};

gameActions.warriorTurn(damageWarrior);
gameActions.mageTurn(customMana);
gameActions.dragonTurn(damageDragon)
console.log(gameActions.turnResults());

