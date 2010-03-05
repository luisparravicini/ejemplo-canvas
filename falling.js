function CoralStrategy(flake) {
  this.flake = flake

  this.update = function(x, y) {
    var new_y = y + 1

    if (this.flake.outsideView(x, new_y))
      return [true, x, y]

    var out = this.flake.isSolid(x, new_y) ||
      this.flake.isSolid(x-1, new_y) ||
      this.flake.isSolid(x+1, new_y)

    return [ out, x, new_y ]
  }
}

function GStrategy(flake) {
  this.flake = flake

  this.update = function(x, y) {
    var new_y = y + 1

    if (this.flake.outsideView(x, new_y))
      return [true, x, y]

    if (!this.flake.isSolid(x, new_y))
      return [false, x, new_y]

//TODO randomizar para que lado va (si pudiera ir para cualquiera)
    if (!this.flake.outsideView(x-1, new_y) &&
      !this.flake.isSolid(x-1, new_y) &&
      !this.flake.isSolid(x-1, new_y-1))
        return [false, x-1, new_y]

    if (!this.flake.outsideView(x+1, new_y) &&
      !this.flake.isSolid(x+1, new_y) &&
      !this.flake.isSolid(x+1, new_y-1))
        return [false, x+1, new_y]

    return [ true, x, y ]
  }
}

