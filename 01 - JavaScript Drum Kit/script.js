window.addEventListener("keydown", function(e) {

     // Find the audio element with the keyCode of the currently
  // pressed key and play the file associated with it.
  var audioEl = document.querySelector('audio[data-key="' + e.keyCode + '"]');
  audioEl.currentTime = 0;
  audioEl.play();
  
  // Find the div with the keyCode of the currently pressed
  // key and add the "playing" class to the element.
 	var keyEl = document.querySelector("div[data-key='" + e.keyCode + "']");
  keyEl.className += " playing";
});

window.addEventListener('keyup', function(e){
	var keyEl = document.querySelector("div[data-key='" + e.keyCode + "']");
  keyEl.classList.remove('playing');
  //keyEl.className = keyEl.className.replace(" playing", "");
});