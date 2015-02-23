describe("Game Runner - normal mode", function(){

  describe("Constructor", function(){

    it("accepts two names", function(){

      var game = new Game("foo", "bar")

      expect(game.left.name).to.equal("foo")
      expect(game.right.name).to.equal("bar")

    })

    it("creates two Ironmon", function(){

      var game = new Game("foo", "bar")

      expect(game.left.health).to.equal(25)
      expect(game.right.power).to.equal(1)

    })

    it("has a turn property", function(){

      var game = new Game("foo", "bar")

      expect(game.turn).to.equal(true)

    })

  })

  describe("prototype.takeTurn", function(){

    it("switches the active player", function(){

      var game = new Game("foo", "bar")
      expect(game.turn).to.equal(true)

      game.takeTurn()
      expect(game.turn).to.equal(false)

      game.takeTurn()
      expect(game.turn).to.equal(true)

    })

  })

})