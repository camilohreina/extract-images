chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'obtenerImagenes') {
    const imagenes = Array.from(document.getElementsByTagName('img')).map(function (img) {
      return img.src
    })
    sendResponse({ imagenes })
  }
})
