var MAX_FLAKES = 420

function SnowFall(canvas) {
  this.screen = new Screen(canvas)
  this.flakes = []
  this.solids = new Solid(canvas.width, canvas.height)

  this.start = function() {
    this.populateFlakes()
    this.draw()
  }

  this.populateFlakes = function() {
//TODO revisar que no haya colision con el fondo/otros copos
    if (this.flakes.length < MAX_FLAKES) {
      var x = Math.floor(Math.random() * this.screen.width())
      this.flakes.push(new Flake(this, x, 0))
    }
  }

  this.update = function() {
    $.each(this.flakes, function(_, flake) { flake.update() })
  }

  this.draw = function() {
    $.each(this.flakes, function(_, flake) { flake.draw() })
    this.screen.copy()
  }

  this.purge = function() {
    this.flakes = this.flakes.filter(function(flake) {
      var out = flake.outOfBounds()
      if (out) this.solids.add(flake)

      if (flake.x < 0 || flake.x >= this.screen.width() ||
        flake.y < 0 || flake.y >= this.screen.height())
          log("bad pos: "+flake.x+","+flake.y)

      return !out
    }, this)

    this.populateFlakes()
  }
}
