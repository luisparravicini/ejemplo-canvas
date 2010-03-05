function Screen(canvas) {
  this.canvas = canvas
  this.ctx = this.canvas.getContext("2d")
  this.pixels = this.ctx.getImageData(0, 0, canvas.width, canvas.height)

  this.putPixel = function(x, y, color) {
    var idx = y*this.pixels.width*4 + x*4
    this.pixels.data[idx] = color
    this.pixels.data[idx+1] = color
    this.pixels.data[idx+2] = color
    this.pixels.data[idx+3] = 255
  }

  this.width = function() { return this.canvas.width }

  this.height = function() { return this.canvas.height }

  this.copy = function() {
    this.ctx.putImageData(this.pixels, 0, 0)
  }

  this.outsideView = function(x, y) {
    return (y >= this.height() || y < 0 ||
      x < 0 || x >= this.width())
  }
}
