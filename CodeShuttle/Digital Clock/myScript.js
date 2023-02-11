const hourE1 = document.getElementById("hour");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");

function Updateclock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    if(h < 10){
        h = "0" + h;
    }
    else{
        h;
    }

    if(m < 10){
        m = "0" + m;
    }
    else{
        m;
    }

    if(s < 10){
        s = "0" + s;
    }
    else{
        s;
    }

    hourE1.innerText = h;
    minutesE1.innerText = m;
    secondsE1.innerText = s;
    ampmE1.innerText = ampm;
    setTimeout(()=>{
        Updateclock();
    },1000)


}

Updateclock();