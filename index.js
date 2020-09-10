var audioplayer = document.getElementById('audioplayer')
var londed = false
var playBtn = document.getElementById('playBtn')
var pauseBtn = document.getElementById('pauseBtn')
pauseBtn.addEventListener('click',(e)=>{
 e.preventDefault();

playBtn.style.display = 'inline';
pauseBtn.style.display = 'none';
audioplayer.pauseBtn();

 return false;
})
const playSong = (File) =>{
    if(loaded == false){
        audioplayer.innerHTML = `<source src="`+file+`" type="audio/mp3"/> `
        loaded == true;
    }
    audioplayer.play();
    playBtn.style.display = 'none';
pauseBtn.style.display = 'inline';
}
document.querySelectorAll('.main_col').forEach(item =>{
item.addEventListener('click', event=>{
    let image = item.getAttribute(`data-image`)
    let artist = item.getAttribute(`data-artist`)
    let song = item.getAttribute(`data-song`)
    let file = item.getAttribute(`data-file`)

    let playerArtistComponent = document.getElementsByClassName('player_artist');
    playerArtistComponent{0}.innerHTML = `
    <img src=`+image+`/>
    <h3>`+artist+`<br> <span>`+song+` </span><h3>
    `;
    playSong(file)
})

})
    
    