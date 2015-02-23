describe("Ironmon - Normal Mode", function(){

  describe("constructor", function(){

    it("has default properties", function(){

      var foo = new Ironmon("bar")

      expect(foo.health).to.equal(25)
      expect(foo.power).to.equal(1)

    })

    it("accepts and uses a name parameter", function(){

      var foo = new Ironmon("bar")
      var baz = new Ironmon("quip")

      expect(foo.name).to.equal("bar")
      expect(baz.name).to.equal("quip")

    })

  })

  describe("protoype.heal", function(){

    it("heals between 1 and 5 HP", function(){

      var foo = new Ironmon("bar")

      for (var i = 0; i < 100; i++) {
        foo.health = 10
        foo.heal()

        expect(foo.health).to.be.within(11, 15)
      }

    })

    it("doesn't go above 25 HP", function(){

      var foo = new Ironmon("bar")

      for (var i = 0; i < 100; i++) {
        foo.health = 22
        foo.heal()

        expect(foo.health).to.be.within(23, 25)
      }

    })
    
  })

  describe("prototype.train", function(){

    it("always increases power by 1", function(){

      var foo = new Ironmon("bar")

      for (var i = 0; i < 100; i++) {
        foo.power = 1
        foo.train()

        expect(foo.power).to.equal(2)
      }

    })

  })

  describe("prototype.active", function(){

    it("returns (health >= 1)", function(){

      var foo = new Ironmon("bar")
      
      foo.health = 25
      expect(foo.active()).to.equal(true)

      foo.health = 0
      expect(foo.active()).to.equal(false)

      foo.health = -10
      expect(foo.active()).to.equal(false)

      foo.health = 4
      expect(foo.active()).to.equal(true)

    })

  })

  describe("prototype.attack", function(){

    it("uses the power property", function(){

      var foo = new Ironmon("bar")
      var baddie = new Ironmon("steve")

      for (var i = 0; i < 100; i++) {
        baddie.health = 25

        foo.power = 1
        foo.attack(baddie)

        expect(baddie.health).to.equal(24)
      }

      foo.power = 10

      for (var i = 0; i < 100; i++) {
        baddie.health = 25

        foo.attack(baddie)

        expect(baddie.health).to.be.within(15, 24)
      }

    })

    it("returns the amount of damage done", function(){

      var foo = new Ironmon("bar")
      var baddie = new Ironmon("steve")

      foo.power = 10

      for (var i = 0; i < 100; i++) {
        baddie.health = 25;

        var dmg = foo.attack(baddie)

        expect(dmg).to.be.within(1, 10)
        expect(25 - baddie.health).to.equal(dmg)
      }

    })

  })

})