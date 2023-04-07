var character = document.getElementById("character");
var block = document.getElementById("block");
document.addEventListener("keypress", function() {
    if (event.key === "w") {
            character.classList.add("animate")
            setTimeout(function(){
                character.classList.remove('animate')
            },500)
        }})
        var checkDead = setInterval(function() {
            let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
            if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
                block.style.animation = "none";
                alert("Game Over.")
                location.reload()
        }},10)