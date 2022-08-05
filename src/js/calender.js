function showTime() {
    let currentDate = new Date();
    const curTime = document.querySelector('.current-time');
    curTime.textContent = currentDate.toLocaleTimeString();
    setTimeout(() => {
        showTime();
        showDate();
    }, 1000);
}

function showDate() {
    let currentDate = new Date();
    console.log(currentDate)
    const curDate = document.querySelector('.current-date');
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    curDate.textContent = currentDate.toLocaleDateString(undefined, options);
    
}

export {showTime}
