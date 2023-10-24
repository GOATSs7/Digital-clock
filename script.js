function updateclock() {
    let now = new Date();
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    if (hours > 12) {
        hours -= 12
    } else if (hours === 0) {
        hours = 12
    }

    const hoursString = hours.toString().padStart(2, '0')
    const min = now.getMinutes().toString().padStart(2, '0')
    const sec = now.getSeconds().toString().padStart(2, '0')

    const timeString = `${hoursString}:${min}:${sec}:${ampm}`
    document.getElementById('clock').textContent = timeString;
}
setInterval(updateclock, 1000);
updateclock();