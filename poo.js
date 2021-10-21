let myMusic = new Audio("joined.mp3");

function simp() {
    myMusic.loop = true;
    return myMusic.paused ? myMusic.play() : myMusic.pause();
  };
