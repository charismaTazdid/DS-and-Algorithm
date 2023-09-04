
function calculateTimeDifference1(inputDate) {
    const currentDate = new Date();
    const inputDateObj = new Date(inputDate);

    const timeDiff = Math.abs(currentDate - inputDateObj);

    const oneYear = 365 * 24 * 60 * 60 * 1000;
    const oneMonth = oneYear / 12;
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecond = 1000;

    const years = Math.floor(timeDiff / oneYear);
    const months = Math.floor(timeDiff % oneYear / oneMonth);
    const days = Math.floor(timeDiff % oneMonth / oneDay);
    const hours = Math.floor(timeDiff % oneDay / oneHour);
    const minutes = Math.floor(timeDiff % oneHour / oneMinute);
    const seconds = Math.floor(timeDiff % oneMinute / oneSecond);

    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds
    };
}

// updated time
function calculateTimeDifference(inputDate) {
    const currentDate = new Date();
    const inputDateObj = new Date(inputDate);

    const updateTime = () => {
        const timeDiff = Math.abs(currentDate - inputDateObj);

        const oneYear = 365 * 24 * 60 * 60 * 1000;
        const oneMonth = oneYear / 12;
        const oneDay = 24 * 60 * 60 * 1000;
        const oneHour = 60 * 60 * 1000;
        const oneMinute = 60 * 1000;
        const oneSecond = 1000;

        const years = Math.floor(timeDiff / oneYear);
        const months = Math.floor(timeDiff % oneYear / oneMonth);
        const days = Math.floor(timeDiff % oneMonth / oneDay);
        const hours = Math.floor(timeDiff % oneDay / oneHour);
        const minutes = Math.floor(timeDiff % oneHour / oneMinute);
        const seconds = Math.floor(timeDiff % oneMinute / oneSecond);

        // Update UI with the time difference
        document.getElementById('years').textContent = years;
        document.getElementById('months').textContent = months;
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    };

    // Update UI immediately
    updateTime();

    // Update UI every second
    setInterval(updateTime, 1000);
}

console.log(calculateTimeDifference1("13 aug 1998"))