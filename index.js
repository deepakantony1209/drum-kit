var noOfDrumButtons = document.querySelectorAll(".drum").length;


for(var i=0;i<noOfDrumButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var buttonClicked = this.innerHTML;
    playSound(buttonClicked);
    
});
}

document.addEventListener("keydown",function(event){
    playSound(event.key);
});

function playSound(input){
switch(input){
    case 'w':
        var tom = new Audio("https://github.com/deepakantony1209/drum-kit/raw/main/tom-1.mp3");
        tom.play(); 
        break;
    
    case 'a':
        var tom = new Audio("https://github.com/deepakantony1209/drum-kit/raw/main/tom-2.mp3");
        tom.play(); 
        break;
    
    case 's':
        var tom = new Audio("https://github.com/deepakantony1209/drum-kit/raw/main/tom-3.mp3");
        tom.play(); 
        break;
    
    case 'd':
        var tom = new Audio("https://github.com/deepakantony1209/drum-kit/raw/main/tom-4.mp3");
        tom.play(); 
        break;
    
    case 'j':
        var tom = new Audio("https://github.com/deepakantony1209/drum-kit/raw/main/snare.mp3");
        tom.play(); 
        break;
    
    case 'k':
        var tom = new Audio("https://github.com/deepakantony1209/drum-kit/raw/main/crash.mp3");
        tom.play(); 
        break;
    
    case 'l':
        var tom = new Audio("https://github.com/deepakantony1209/drum-kit/raw/main/kick-bass.mp3");
        tom.play(); 
        break;
    
    }
}
