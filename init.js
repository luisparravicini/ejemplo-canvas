function log(msg) {
  $('#log').append(msg + '<br>')
}


var fps = 60
var snow
var intervalId
var paused = false
var fall_strategy = 'GStrategy'


function updateUI() {
  if (!paused) {
    snow.update()
    snow.draw()
    snow.purge()
  }
}

function initUI() {
  if (intervalId)
    clearInterval(intervalId)

  var canvas = document.getElementById('c') //$('#c')
  snow = new SnowFall(canvas)
  snow.start()

  intervalId = window.setInterval(updateUI, 1000 / fps)
}

function changeStrategy(elem) {
  fall_strategy = elem.val()
}

function initWidgets() {
  $('#pause_play').bind('click', function() {
    var what = $(this).val()
    if (what == 'Pausar') {
      what = 'Continuar'
    } else {
      what = 'Pausar'
    }

    paused = !paused

    $(this).val(what)
  })

  changeStrategy($('#kind'))
  $('#kind').bind('change', function() { changeStrategy($(this)) })
}

function init() {
  initWidgets()
  initUI()
}

