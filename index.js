let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
// let format;

// if(hour >= 12){
//     format = "PM"
// }else {
//     format = "AM"
// }
setInterval (() => {
    a = new Date();
    var hour = a.getHours();
    var format = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    date = a.toLocaleDateString("en-US", options);
    time = hour + ':' + a.getMinutes() + ':' + a.getSeconds() + ' ' + format;
    document.getElementById('time').innerHTML = time + "<br>on " + date ;
}, 1000);
