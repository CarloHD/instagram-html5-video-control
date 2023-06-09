const modifingVid = () => {
  const videoOnPageNotMod = document.querySelectorAll('video:not([mod="true"])')

  // modifica pulsante tag nei video
  videoOnPageNotModded.forEach(video => {
    const tagButton =
      video.parentElement.lastElementChild.lastElementChild.lastElementChild

    if (tagButton.classList.contains('_a9-5')) {
      // appendi a suo genitore genitore precedente
      tagButton.parentElement.parentElement.appendChild(tagButton)
      // modifica posizionamento
      tagButton.style.cssText +=
        'bottom: 40px !important; left: unset !important; right: 4px !important;'
    }
  })

  // modifica elemento video
  videoOnPageNotModded.forEach(video => {
    video.setAttribute('controls', true)
    video.setAttribute('mod', true)

    video.onloadstart = () => {
      video.pause()
    }

    video.onplay = () => {
      video.muted = false
    }

    video.onpause = () => {
      video.muted = true
    }

    video.onended = () => {
      video.pause()
    }
  })

  const videoOnPage = document.querySelectorAll('video')
  videoOnPage.forEach(video => {
    video.pause()
  })

  // rimozione overlay
  const videoOverlays = document.querySelectorAll(
    ' [data-visualcompletion="ignore"] '
  )

  videoOverlays.forEach(overlay => {
    overlay.remove()
  })
}

let timerId = ''

const timerFn = () => {
  timerId = setTimeout(modifingVid(), 300)
}

window.onscroll = () => {
  clearTimeout(timerId)
  timerFn()
}
