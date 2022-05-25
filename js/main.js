let profileCards = document.getElementsByClassName("profile");

for(let i = 0; i < profileCards.length; i++){
    profileCards[i].onclick = function(){

        profileCards[i].style.animationName =  "expand";
        profileCards[i].children[1].children[0].style.animationName = "popup";
        profileCards[i].children[2].children[0].style.animationName = "popup2";
    }
    profileCards[i].onkeyup = function(event){
        console.log(event.keyCode);
        if(event.keyCode === 32){
            profileCards[i].style.animationName =  "expand";
        profileCards[i].children[1].children[0].style.animationName = "popup";
        profileCards[i].children[2].children[0].style.animationName = "popup2";
        }
    }
}