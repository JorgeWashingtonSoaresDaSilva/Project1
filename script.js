let butao = document.getElementById("bt");
let dark_theme = false;

function change_background(){
    if(dark_theme == false){
        dark_theme = true;
        document.body.style.background = "white"
        butao.style.background = "black"
        butao.style.color = "white"
    }else{
        dark_theme =false;
        document.body.style.background = "black"
        butao.style.background = "white"
        butao.style.color = "black"
    }
}