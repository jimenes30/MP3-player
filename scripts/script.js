let song = document.getElementById("song")
let timerAtual = document.getElementById("timer-atual")
let timerTotal = document.getElementById("timer-total")
let poster = document.getElementById("poster")
let play = document.getElementById("playPause")
let bar = document.getElementById("bar")
const playlist = ["./assets/audios/naruto-op1.mp3", "./assets/audios/naruto-op2.mp3", "./assets/audios/naruto-op3.mp3"]
const posteres = ["./assets/poster/naruto-op1.jpg", "./assets/poster/naruto-op2.jpg", "./assets/poster/naruto-op3.jpg"]
let faixaAtual = 0

function playPause() {
    if (song.paused == false){
        song.pause()
        play.src = "https://img.icons8.com/material/40/000000/play--v1.png"        
    }
    else {
        song.play()
        play.src = "https://img.icons8.com/material/40/000000/pause--v1.png"
    }
    console.log(`Som pausado: ${song.paused}`)
}

function retroceder5() {
    song.currentTime -= 5
    console.log(song.currentTime)
}

function avancar5() {
    song.currentTime += 5
    console.log(song.currentTime)
}

function speeddown() {
    song.playbackRate -= 0.1
    console.log(song.playbackRate)
}

function speedup() {
    song.playbackRate += 0.1
    console.log(song.playbackRate)
}

function voltarFaixa() {
    faixaAtual -= 1
    if (faixaAtual < 0){
        faixaAtual = playlist.length-1
        console.log("Ultima musica da playlist")
    }
    song.src = playlist[faixaAtual]
    console.log(song.src = playlist[faixaAtual])
    song.load()
    song.play()
    play.src = "https://img.icons8.com/material/40/000000/pause--v1.png"
    setTimeout(timer, 100)
}

function avancarFaixa() {
    faixaAtual += 1
    if (faixaAtual > playlist.length-1){
        faixaAtual = 0
        console.log("Fim da playlist")
    }
    song.src = playlist[faixaAtual]
    console.log(song.src = playlist[faixaAtual])
    song.load()
    song.play()
    play.src = "https://img.icons8.com/material/40/000000/pause--v1.png"
    setTimeout(timer, 100)
}

function mudarPoster() {
    poster.src = posteres[faixaAtual]
}

function timer() {
    timerTotal.innerText = Math.floor(song.duration) + "s"
}
setTimeout(timer, 100)

function progressao() {
    timerAtual.innerText = Math.floor(song.currentTime) + "s"
    bar.value = Math.floor((song.currentTime/song.duration)*100)
}
setInterval(progressao, 900)
