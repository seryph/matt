const audio = document.getElementById("myAudio");
const play_button = document.getElementById("play");


let toggle = false;

play_button.addEventListener('click', (e) => {
    e.preventDefault();

    if(toggle){
        playAudio();
        toggle = !toggle;
    }
    else {
        pauseAudio();
        toggle = !toggle;
    }
});


function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

