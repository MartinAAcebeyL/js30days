const ver = x => console.log(x);
const content = document.getElementById('content');

if ("webkitSpeechRecognition" in window) {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = 'es-AR';

    let p = document.createElement('p');
    content.appendChild(p);

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');

        const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
        p.textContent = poopScript;

        if (e.results[0].isFinal) {
            p = document.createElement('p');
            content.appendChild(p);
        }
    });

    recognition.addEventListener('end', recognition.start);

    recognition.start();

} else
    console.log("Speech Recognition Not Available")