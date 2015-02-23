/*
  This class represents a character in a video game.

  It contains two default properties:
    - health (which starts at 25)
    - power (which starts at 1)

  It also contains a property passed in as a parameter:
    - name
*/
var Ironmon = function(name, type) {
  this.health = 25;
  this.power = 1;
  this.name = name;
  this.type = type;
}

/*
  This function determines a random *integer* between 1 and 5.
  
  It adds that number to the health of the Ironmon.

  An Ironmon's health cannot go above 25. If healing would 
    make the Ironmon's health go above 25, it becomes 25 instead.
*/
Ironmon.prototype.heal = function() {

  var recover = Math.ceil(Math.random()*5);
  this.health += recover;

  if (this.health > 25 ){
    this.health = 25
  }



}

/*
  This function adds one to the power of the Ironmon.
*/
Ironmon.prototype.train = function() {
  this.power += 1;

}

/*
  This function returns true if the Ironmon's health is greater than 0.

  Otherwise, it returns false.
*/
Ironmon.prototype.active = function() {

  return (this.health > 0)

}

/*
  This function accepts another, opponent Ironmon as a parameter.

  It reduces the health of the opponent Ironmon by a random *integer*
    between 1 and whatever this Ironmon's power is.

  This function returns the amount of damage dealt.
*/
Ironmon.prototype.attack = function(opponent) {

  var damage = Math.ceil(Math.random()*this.power);


  switch (this.type)
  {
    case 'fire':
      if ( opponent.type === 'grass')
      {
        opponent.health -= damage * 2;
        return damage * 2;
      }
      opponent.health -= damage;
      return damage;


    case 'water':
      if ( opponent.type === 'fire')
      {
        opponent.health -= damage * 2;
        return damage * 2;
      }
      opponent.health -= damage;
      return damage;

    case 'grass':
      if ( opponent.type === 'water')
      {
        opponent.health -= damage * 2;
        return damage * 2;
      }
      opponent.health -= damage;
      return damage;

    default :

      opponent.health -= damage;
      return damage;


  }

}