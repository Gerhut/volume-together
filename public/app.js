void function ($) {
  var $volume = $('#volume')

  $volume.slider({
    animate: true,
    disabled: true,
    slide: function (event, ui) {
      if (ui.value && webSocket.readyState == WebSocket.OPEN) {
        webSocket.send(ui.value)
      }
    }
  })


  var webSocket = new WebSocket('ws://' + location.host)
  webSocket.onclose = function (event) {
    $volume.slider('disabled', true)
  }
  webSocket.onerror = function (event) {
    console.error(event)
    $volume.slider('disabled', true)
  }
  webSocket.onmessage = function (event) {
    $volume.slider({
      value: event.data,
      disabled: false
    })
  }

} (window.jQuery.noConflict(true))
