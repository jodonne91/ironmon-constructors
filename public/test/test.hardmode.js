describe("Ironmon - Hard Mode", function(){

  describe("constructor", function(){

    it("accepts and uses a type parameter", function(){

      var foo = new Ironmon("bar", "fire")
      var baz = new Ironmon("quip", "water")

      expect(foo.name).to.equal("bar")
      expect(foo.type).to.equal("fire")

      expect(baz.name).to.equal("quip")
      expect(baz.type).to.equal("water")

    })

  })

  describe("prototype.attack", function(){

    it("uses the type property", function(){

      var foo = new Ironmon("bar", "fire")
      var baddie = new Ironmon("steve", "grass")

      for (var i = 0; i < 100; i++) {
        baddie.health = 25

        foo.power = 1
        foo.attack(baddie)

        expect(baddie.health).to.equal(23)
      }

      foo.power = 10

      for (var i = 0; i < 100; i++) {
        baddie.health = 25

        foo.attack(baddie)

        expect(baddie.health).to.be.within(5, 23)
      }

    })

    it("returns the amount of damage done", function(){

      var foo = new Ironmon("bar", "water")
      var baddie = new Ironmon("steve", "fire")

      foo.power = 10

      for (var i = 0; i < 100; i++) {
        baddie.health = 25;

        var dmg = foo.attack(baddie)

        expect(dmg).to.be.within(2, 20)
        expect(25 - baddie.health).to.equal(dmg)
      }

    })

  })

})