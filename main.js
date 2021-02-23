// DOM Elements
let clock = document.getElementById('clock'),
    greeting = document.getElementById('greeting');

function landingClock() {
    let time = new Date(),
    h = time.getHours().toString(),
    m = time.getMinutes().toString(),
    s = time.getSeconds().toString();

    if (h.length < 2) {
        h = '0' + h;
    }
    if (m.length < 2) {
        m = '0' + m;
    }
    if (s.length < 2) {
        s = '0' + s;
    }
    let clockString = h + ':' + m + ':' + s;
    clock.textContent = clockString;

}
setInterval(landingClock, 1000);


function landingBaground() {
    let textDay = "Добрый День",
    textNight = "Доброй ночи",
    textMorning = "Доброе утро",
    time = new Date(),
    h = time.getHours();
    console.log(h);

  if ( h > 0 && h < 5 ) {  greeting.textContent = textNight;
    document.body.style.backgroundImage = "url('images/3.jpg')";
    document.body.style.backgroundSize = "100%";

    document.body.style.color = 'white';
     }
     else if  (h >= 5 && h < 11) { greeting.textContent = textMorning;
        document.body.style.backgroundImage = "url('images/1.jpg')";
        document.body.style.backgroundSize = "100%";
        

     }
     else { greeting.textContent = textDay;
        document.body.style.backgroundImage = "url('images/2.jpg')";
        document.body.style.color = 'RosyBrown';
        document.body.style.backgroundSize = "100%";
    };
 }
 landingBaground();
