function showTime() {
    let currentDate = new Date();
    const curTime = document.querySelector('.current-time');
    curTime.textContent = currentDate.toLocaleTimeString('en-GB');
    setTimeout(() => {
        showTime();
        showDate();
    }, 1000);
}

function showDate() {
    let currentDate = new Date();
    const curDate = document.querySelector('.current-date');
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    curDate.textContent = currentDate.toLocaleDateString(undefined, options);  
}

function showGreeting() {
    let message = '';
    let currentDate = new Date();
    let hour = currentDate.getHours();
    if(hour > 5 && hour < 12) {
        message = `Good morning, `;
    }
    else if(hour >= 12 && hour < 18) {
        message = `Good afternoon, `;
    }
    else if(hour >= 17 && hour < 24) {
        message = `Good evening, `;
    }else {
        message = `Good night, `;
    }
    document.querySelector('.daytime').innerHTML = message;
}

export {showTime, showGreeting}
