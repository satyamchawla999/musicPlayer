
setTimeout(()=>{
    
    const playerButton = document.querySelector('.player-button');
    const audio = document.querySelector('audio');

    function toggleAudio() {
        if(audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }

    playerButton.addEventListener("click",toggleAudio);
    
},1000)

