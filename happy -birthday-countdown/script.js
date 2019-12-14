const countDate = new Date('Jan 1, 2020 00:00:00').getTime();

function happyBirthday() {
    const now = new Date().getTime();
    const delta = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(delta / day);
    const h = Math.floor((delta % day) / hour);
    const m = Math.floor((delta % hour) / minute);
    const s = Math.floor((delta % minute) / second);

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(() => {
    happyBirthday();
}, 1000);