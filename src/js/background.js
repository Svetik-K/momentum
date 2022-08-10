function getRandomNum() {
    let random = Math.floor(Math.random() * 20) + 1;
    return random;
}

function setBackground(random, time) {
    const background = new Image();
    if(random < 10) {
        background.src = `https://raw.githubusercontent.com/Svetik-K/momentum_images/main/${time}/0${random}.webp`;
    } else {
        background.src = `https://raw.githubusercontent.com/Svetik-K/momentum_images/main/${time}/${random}.webp`;
    }
   
    background.addEventListener('load', () => {
        if(random < 10) {
            document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/Svetik-K/momentum_images/main/${time}/0${random}.webp')`;
        } else {
            document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/Svetik-K/momentum_images/main/${time}/${random}.webp')`;
        }   
    });
      
    document.body.style.backgroundSize = 'cover';
}

function getTimeOfDay() {
    let today = new Date();
    let hour = today.getHours();
    if(hour > 5 && hour < 12) {
        return 'morning';
    }
    else if(hour >= 12 && hour < 18) {
        return 'afternoon';
    }
    else if(hour >= 17 && hour < 24) {
        return 'evening';
    } else {
        return 'night';
    }
}

module.exports = {
    getRandomNum,
    setBackground,
    getTimeOfDay
}