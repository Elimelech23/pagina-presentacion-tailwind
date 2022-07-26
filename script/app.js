function claro(){
    if (document.getElementById("body").classList == ("bg-black")){
        document.getElementById("body").classList.remove ("bg-black");
        document.getElementById("body").classList.add ("bg-white");
    } else if (document.getElementById("body").classList == ("bg-white")){
        document.getElementById("body").classList.remove ("bg-white");
        document.getElementById("body").classList.add ("bg-black");
    }
}