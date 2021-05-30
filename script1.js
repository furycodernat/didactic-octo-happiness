(function() {
    var memes = document.querySelectorAll("#memes img");
    

    var current = 0;
    var timer;
    var animationInProgress = false;
    moveMemes();

    

    document.addEventListener("transitionend", function(e) {
        if (e.target.classList.contains("offscreen-left")) {
            e.target.classList.remove("offscreen-left");
            timer = setTimeout(moveMemes, 5000);
            animationInProgress = false;
        }
    });

    function moveMemes(nextMeme) {
        animationInProgress = true;
        memes[current].classList.add("offscreen-left");
        memes[current].classList.remove("onscreen");
        

        if (typeof nextMeme == "undefined") {
            current++;
            if (current >= memes.length) {
                current = 0;
            }
        } else {
            current = nextMeme;
        }

        memes[current].classList.add("onscreen");
        
    }
})();
