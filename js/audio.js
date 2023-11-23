// use DOM (Document Object Model) to get the organ and fire gifs from the HTML

const organ = document.getElementById("organ")
const fire = document.getElementById("fire")

// use DOM (Document Object Model) to get audio from audio folder

const organAudio = new Audio("audio/organ.mp3")
const fireAudio = new Audio("audio/fire.mp3")

// listening for the click on the drawings

organ.onclick = (event) => {
    if (organAudio.paused) {
        // calling the play method (built in function)
        organAudio.play();
    } else {
        // calling the pause method (built in function)
        organAudio.pause();
    }
}

fire.onclick = (event) => {
    if (fireAudio.paused) {
        // calling the play method (built in function)
        fireAudio.play();
    } else {
        // calling the pause method (built in function)
        fireAudio.pause();
    }
}

