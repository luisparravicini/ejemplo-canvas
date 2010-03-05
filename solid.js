function Solid(width, height) {
  this.width = width
  this.height = height
  this.solids = []

  this.isSolid = function(next_x, next_y) {
    return (next_x < 0 || next_x >= width) ||
      (next_y < 0 || next_y >= height) ||
      (this.solids[next_y] && this.solids[next_y][next_x] > 0)
  }

  this.add = function(flake) {
    if (!this.solids[flake.y])
        this.solids[flake.y] = []
    this.solids[flake.y][flake.x] = 1
  }

}

