// Initializing the variable
let songIndex =1;
let audioElement = new Audio("songs/8.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif= document.getElementById("gif1")
let prev= document.getElementById("prevSong")
let next=document.getElementById("nextSong")
let songItem= Array.from(document.getElementsByClassName("songItem"))
let num1=document.getElementById("1")

let songs =[
    {songName: "Naina Ki Talwar", filePath: "songs/1.mp3", coverPath: "cover/cover1.jpg"},
    {songName: "Mera Dil a Pukare", filePath: "songs/2.mp3", coverPath: "cover/cover2.jpg"},
    {songName: "Enno Enno Janamala", filePath: "songs/3.mp3", coverPath: "cover/cover3.jpg"},
    {songName: "Chunari Chunari", filePath: "songs/4.mp3", coverPath: "cover/cover4.jpg"},
    {songName: "Flute Music", filePath: "songs/5.mp3", coverPath: "cover/cover5.jpg"},
    {songName: "Kesari Ya Tera", filePath: "songs/6.mp3", coverPath: "cover/cover6.jpg"},
    {songName: "Oo vana villalo", filePath: "songs/7.mp3", coverPath: "cover/cover7.jpg"},
    {songName: "Tere jaane ka Gaam", filePath: "songs/8.mp3", coverPath: "cover/cover8.jpg"},
    {songName: "Tenu Patha hi Nahi", filePath: "songs/9.mp3", coverPath: "cover/cover9.jpg"},
    {songName: "Dhadkan Aye Khethe", filePath: "songs/10.mp3", coverPath: "cover/cover10.jpg"},

]

//Handle Play/Pause click
masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play()
        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")
        gif1.style.opacity= 1;


    }

    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle")
        masterPlay.classList.add("fa-play-circle")
        gif1.style.opacity= 0;
    }
})


//Listen Event
myProgressBar.addEventListener("timeUpdate", ()=>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100    

})

/* Cover - Image*/
songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath
    element.getElementsByClassName("songNm")[0].innerHTML=songs[i].songName
})

/* songs right play button */
const mediaAllPlay=()=>{
    Array.from(document.getElementsByClassName("songPlayItem")).forEach((element)=>{
    element.classList.remove("fa-pause-circle")
    element.classList.add("fa-play-circle")
    })
}

Array.from(document.getElementsByClassName("songPlayItem")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        mediaAllPlay()
        songIndex=parseInt(e.target.id)
        e.target.classList.remove("fa-play-circle")
        e.target.classList.add("fa-pause-circle")
        audioElement.src=`songs/${songIndex+1}.mp3`
        audioElement.currentTime = 0;
        audioElement.play()
        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")
    })

})

document.getElementById("nextSong").addEventListener("click",()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play()
    masterPlay.classList.remove("fa-play-circle")
    masterPlay.classList.add("fa-pause-circle")
})

document.getElementById("prevSong").addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play()
    masterPlay.classList.remove("fa-play-circle")
    masterPlay.classList.add("fa-pause-circle")
})