function updateTime() {
    
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const mins = now.getMinutes().toString().padStart(2, '0');
    const secs = now.getSeconds().toString().padStart(2, '0');

    const time = `${hours}:${mins}:${secs}`;

    document.getElementById('clock').textContent = time;
}

let intervalId;

// document.getElementById('startButton').addEventListener('click', ()=>{
//     intervalId = setInterval(updateTime, 1000);
// });

// document.getElementById('stopButton').addEventListener('click', ()=>{
//     clearInterval(intervalId);
// });

document.getElementById('startButton').onclick = () => {
    intervalId = setInterval(updateTime, 1000);
};

document.getElementById('stopButton').onclick = () => {
    clearInterval(intervalId);
};

updateTime();