let song1 = document.getElementById("song1")
let play = document.getElementById("playPause")
let retroceder = document.getElementById("retroceder5")
let avancar = document.getElementById("avancar5")

function playPause() {
    if (song1.paused == false){
        song1.pause()
        play.src = "https://img.icons8.com/material/40/000000/pause--v1.png"
    }
    else {
        song1.play()
        play.src = "https://img.icons8.com/material/40/000000/play--v1.png"
    }
    console.log(song1.paused)
}

function retroceder5() {
    song1.currentTime -= 5
    console.log(song1.currentTime)
}

function avancar5() {
    song1.currentTime += 5
    console.log(song1.currentTime)
}

function speeddown() {
    song1.playbackRate -= 0.1
    console.log(song1.playbackRate)
}

function speedup() {
    song1.playbackRate += 0.1
    console.log(song1.playbackRate)
}






