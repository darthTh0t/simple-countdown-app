const timerDiv = document.querySelector('.timer');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const wishTitle = document.querySelector('#wishTitle');
const specialWish = document.querySelector('#specialWish');
const finalMessage = document.querySelector('#final-message');

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const birthdayTime = new Date("Aug 02 2022 00:00:00");

function setTime() {
    const currentTime = new Date;
    let specialTime = birthdayTime.getTime() - currentTime.getTime();
    const specialHour = Math.floor((specialTime % day) / hour);
    const specialMinute = Math.floor((specialTime % hour) / minute);
    const specialSecond = Math.floor((specialTime % minute) / second);

    hours.innerText = specialHour < 10 ? "0" + specialHour : specialHour;
    minutes.innerText = specialMinute < 10 ? "0" + specialMinute : specialMinute;
    seconds.innerText = specialSecond < 10 ? "0" + specialSecond : specialSecond;

    console.log(specialTime);

    if(specialTime <= 0){
        wishTitle.classList.add('animate__animated', 'animate__fadeOutRight');
        specialWish.innerText = "Happy Birthday Puchi!"
        specialWish.style.color = "#D61C4E"
        specialWish.classList.add('animate__animated', 'animate__fadeInLeftBig');
        clearInterval(timerStart);
        hours.innerText = 00;
        minutes.innerText = 00;
        seconds.innerText = 00;
        timerDiv.classList.add('animate__animated', 'animate__bounceOut');
        finalMessage.style.display = 'block';
        finalMessage.classList.add('animate__animated', 'animate__bounceInUp');
        return
    }
}

const timerStart = setInterval(setTime, 1000);