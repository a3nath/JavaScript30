document.addEventListener('keydown', function (event) {
    let selKey = null;
    let audio = null;
    switch(event.key){
        case("a"):
            selKey = document.querySelector("div[data-key='65']")
            selKey.classList.add("playing")
            audio = document.querySelector("audio[data-key='65']")
            audio.play()
        case("s"):
            selKey = document.querySelector("div[data-key='83']")
            selKey.classList.add("playing")
            audio = document.querySelector("audio[data-key='83']")
            audio.play()
        case("d"):
            selKey = document.querySelector("div[data-key='68']")
            selKey.classList.add("playing")
            audio = document.querySelector("audio[data-key='68']")
            audio.play()
        case("f"):
            selKey = document.querySelector("div[data-key='70']")
            selKey.classList.add("playing")
            audio = document.querySelector("audio[data-key='70']")
            audio.play()
        case("g"):
            selKey = document.querySelector("div[data-key='71']")
            selKey.classList.add("playing")
            audio = document.querySelector("audio[data-key='71']")
            audio.play()
        case("h"):
            selKey = document.querySelector("div[data-key='72']")
            selKey.classList.add("playing")
            audio = document.querySelector("audio[data-key='72']")
            audio.play()
        case("j"):
            selKey = document.querySelector("div[data-key='74']")
            selKey.classList.add("playing")
            audio = document.querySelector("audio[data-key='74']")
            audio.play()
        case("k"):
            selKey = document.querySelector("div[data-key='75']")
            selKey.classList.add("playing")
            audio = document.querySelector("audio[data-key='75']")
            audio.play()
        case("l"):
            selKey = document.querySelector("div[data-key='76']")
            selKey.classList.add("playing")
            audio = document.querySelector("audio[data-key='76']")
            audio.play()
    }
  });

