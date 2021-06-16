window.addEventListener('keydown', function (event) {
    // const downKey = event.key
    const key = event.keyCode
    const aud = document.querySelector(`audio[data-key="${key}"]`)
    if (!aud) return null; // if undefined key pressed dont return anything
    aud.currentTime = 0; // rewind to 0
    aud.play()
    const selKey = document.querySelector(`div[data-key="${key}"]`)
    selKey.classList.add("playing")
})


const allKey = document.querySelectorAll('.key')

function removeTransition (e) {
    if (e.propertyName !== 'transform') return; // transitionened is not a defined event. so need this so that we dont return unless we have transofrm property which comes only once clicked 
    // this.classList.remove('playing')
    console.log(this)
    this.classList.remove('playing')
}

allKey.forEach(key => key.addEventListener('transitionend', removeTransition))