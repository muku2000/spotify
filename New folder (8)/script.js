function playAll(songNumber){
    var audioElement= document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    var songFileName = "music/"+songNumber+".mp3";
    var currentRow=document.getElementById("song"+songNumber) ;
    
    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused){
        audioElement.pause();
        playBtn.innerHTML='<img src="play-button.svg">';
        currentRow.classList.remove("highlight") ;
        
    }
    else{
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playBtn.innerHTML='<img src="pause-button.svg">';
        currentRow.classList.remove("highlight") ;
    }
}

function playaudio(){
    var audio=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    if(audio.paused){
        audio.play();
        playBtn.innerHTML='<img src="pause-button.svg">';
    }
    else{
        audio.pause();
        playBtn.innerHTML='<img src="play-button.svg">';
    }
}