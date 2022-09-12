const stop = document.getElementById('stop');
const speak = document.getElementById('speak');
const textArea = document.getElementById('text');
const rate = document.getElementById('rate');
const pich = document.getElementById('pich');
const voicesSelect = document.querySelector('select');

const ver = x => console.log(x);
const msg = new SpeechSynthesisUtterance();

msg.text = textArea.value;

function populateVoices() {
    voices = this.getVoices();
    voicesSelect.innerHTML = voices
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('');
}

function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}

function toggle(startOver = true) {
    speechSynthesis.cancel();
    if (startOver) {
        speechSynthesis.speak(msg);
    }
}

function setOption() {
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
}
speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesSelect.addEventListener('change', setVoice);
speak.addEventListener('click', toggle);
stop.addEventListener('click', () => toggle(false));