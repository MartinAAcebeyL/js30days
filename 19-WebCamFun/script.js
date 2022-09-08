const ver = x => console.log(x);

const video = document.querySelector('video');
const photos = document.querySelector('#photos');
const audio = document.querySelector('audio');

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


function videoFunction() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(videoDevice =>{
            video.srcObject = videoDevice;
            video.play();
        })
        .catch(err => {
            console.error(`ERROR!!!`, err);
        });
}

function takePhoto() {
    audio.currentTime = 0;
    audio.play();

    const src = canvas.toDataURL();
    const a = document.createElement('a');
    a.href = src;
    a.setAttribute('dowload','reto-13');
    a.innerHTML = `<img src="${src}" alt="reto 19"/>`

    photos.insertBefore(a, photos.firstChild);
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(()=>{
        ctx.drawImage(video, 0, 0);
        // take the pixels out
        let imgData = ctx.getImageData(0, 0, width, height);
        imgData = splitRGBA(imgData);
        //put them back
        ctx.putImageData(imgData, 0, 0);
    },16);
}

function splitRGBA(imgData) {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i - 150] = imgData.data[i + 0]; // RED
        imgData.data[i + 500] = imgData.data[i + 1]; // GREEN
        imgData.data[i - 550] = imgData.data[i + 2]; // Blue
    }
    return imgData;
}

videoFunction();
video.addEventListener('canplay', paintToCanvas);
//setInterval(paintToCanvas, 16)