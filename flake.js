function Flake(snowfall, x, y) {
  this.x = x
  this.y = y
  this.last_x = null
  this.last_y = null
  this.screen = snowfall.screen
  this.snowfall = snowfall
  this.out = false
  this.mover = eval('new ' + fall_strategy + '(this)')

  this.update = function() {
    this.last_x = this.x
    this.last_y = this.y

    var new_pos = this.mover.update(this.x, this.y)
    this.out = new_pos[0]
    if (!this.out) {
      this.x = new_pos[1]
      this.y = new_pos[2]
    }
  }

  this.draw = function() {
    if (this.last_x != null && this.last_y != null)
      this.screen.putPixel(this.last_x, this.last_y, 0)
    this.screen.putPixel(this.x, this.y, 0xe0)
  }

  this.isSolid = function(x, y) {
    return this.snowfall.solids.isSolid(x, y)
  }

  this.outsideView = function(x, y) {
    return this.screen.outsideView(x, y)
  }

  this.outOfBounds = function(x, y) {
    if (this.out)
      return true

    if (!x) x = this.x
    if (!y) y = this.y

    return (this.isSolid(x, y) || this.outsideView(x, y))
  }
}
