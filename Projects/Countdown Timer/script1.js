const endDate = "27 July 2022 08:20:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if (diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24);    //returns how many no. of days are remaining
    inputs[1].value = Math.floor(diff / 3600) % 24;   //returns how many hrs are remaining
    inputs[2].value = Math.floor(diff / 60) % 60;   //returns how many minutes are remaining
    inputs[3].value = Math.floor(diff) % 60;         //returns how many seconds are remaining
}

// initial call
clock()

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
*/

//will call every seconds 
setInterval(
    () => {
        clock()
    },
    1000
)