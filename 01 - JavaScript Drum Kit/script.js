document.addEventListener('keydown', function (event) {
    let selKey = null;
    let audio = null;
    const downKey = event.key
    switch(downKey){
        case("a"):
            selKey = document.querySelector("div[data-key='65']")
            selKey.classList.add("playing")
            console.log(selKey.innerHTML)
            console.log(selKey.classList.value)
            // audio = document.querySelector("audio[data-key='65']")
            // audio.play()
            // console.log(audio.innerHTML)
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

//   document.addEventListener('keyup', function (event) {
//     let upSelKey = null;
//     const upKey = event.key
//     switch(upKey){
//         case("a"):
//             upSelKey = document.querySelector("div[data-key='65']")
//             upSelKey.classList.remove("playing")
//         case("s"):
//             upSelKey = document.querySelector("div[data-key='83']")
//             upSelKey.classList.remove("playing")
//         case("d"):
//             upSelKey = document.querySelector("div[data-key='68']")
//             upSelKey.classList.remove("playing")  
//         case("f"):
//             upSelKey = document.querySelector("div[data-key='70']")
//             upSelKey.classList.remove("playing")
//         case("g"):
//             upSelKey = document.querySelector("div[data-key='71']")
//             upSelKey.classList.remove("playing")
//         case("h"):
//             upSelKey = document.querySelector("div[data-key='72']")
//             upSelKey.classList.remove("playing")
//         case("j"):
//             upSelKey = document.querySelector("div[data-key='74']")
//             upSelKey.classList.remove("playing")
//         case("k"):
//             upSelKey = document.querySelector("div[data-key='75']")
//             upSelKey.classList.remove("playing")
//         case("l"):
//             upSelKey = document.querySelector("div[data-key='76']")
//             upSelKey.classList.remove("playing")
                  
//     }
//   });



