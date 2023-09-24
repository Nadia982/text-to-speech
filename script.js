let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelectTag = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    console.log(voices);
    speech.voice = voices[0];
    voices.forEach((voice, i) => (voiceSelectTag.options[i]) = new Option(voice.name, i))
};

voiceSelect.addEventListener("change", () =>{
  speech.voice = voices[voiceSelectTag.value]
})


document.querySelector("button").addEventListener("click", ()=>{
  speech.text=  document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);

});