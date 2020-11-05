var audioplayer = document.getElementById('audioplayer')
var londed = false
var playBtn = document.getElementById('playBtn')
var pauseBtn = document.getElementById('pauseBtn')
var load = document.getElementById('load')
var progresse = document.getElementById('player_control_progress_2')

audioplayer.onloadstart = function() {
    load.style.display = 'inline';
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'none';
   
};

audioplayer.oncanplay = function() {
    load.style.display = 'none';
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline';
};

pauseBtn.addEventListener('click',(e)=>{
    e.preventDefault();

   
  
    playBtn.style.display = 'inline';
    pauseBtn.style.display = 'none';
    audioplayer.pause();
    return false;
});
audioplayer.start = function() { playBtn.style.display = 'inline'; pauseBtn.style.display = 'none'; load.style.display = 'none' 
        
}
; 

playBtn.addEventListener('click',(e)=>{
    e.preventDefault();
   
   playBtn.style.display = 'none';
   pauseBtn.style.display = 'inline';
   audioplayer.play();
    return false;
   });

const playSong = (file) =>{
    if(londed == false){
        audioplayer.innerHTML =`<source src="`+file+`" type="audio/mp3"/> `;
        londed == true;
    }
    audioplayer.play();
};
document.querySelectorAll('.main_col').forEach(item =>{ 
    item.addEventListener('click', event=>{
        let image = item.getAttribute(`data-image`)
        let artist = item.getAttribute(`data-artist`)
        let song = item.getAttribute(`data-song`)
        let file = item.getAttribute(`data-file`)
       
        
        document.querySelector('body').classList.add("subir")
        console.log()
        audioplayer.load();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline';


        let playerArtistComponent = document.getElementsByClassName('player_artist');
        playerArtistComponent[0].innerHTML = `
        <img src="`+image+`"/>
        <h3>`+artist+`<br><h3>
        `;;
        
        playSong(file);
        console.log(file)

        foi()
    })

    
});
function foi() {
    setInterval(() => {
        //console.log("posição atual:");
        var tempo = audioplayer.currentTime;
        var horas = Math.floor(tempo / 3600);
        var minutos = Math.floor((tempo - (horas * 3600)) / 60);
        var segundos = Math.floor(tempo % 60);
    
        if (horas < 10) horas = '0' + horas;
        if (minutos < 10) minutos = '' + minutos;
        if (segundos < 10) segundos = '0' + segundos;
       // console.log(horas +':' + minutos+ ':'+ segundos );
       
       function humanizar_horas(tempo){
    var horas = Math.floor(tempo / 3600);
    var minutos = Math.floor((tempo - (horas * 3600)) / 60);
    var segundos = Math.floor(tempo % 60);

    if (horas < 10) horas = '0' + horas;
    if (minutos < 10) minutos = '' + minutos;
    if (segundos < 10) segundos = '0' + segundos;

    
 }
    
   
   
    

    }, 1000);
}

    
