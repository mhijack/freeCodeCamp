const weatherBtn = document.getElementById('getWeather');
const unitBtn = document.getElementById('unit');

weatherBtn.addEventListener('click', function() {
    fadeOut(weatherBtn);
    getCoords(yahooRequest);
    unitBtn.addEventListener('click', toggleTempUnit);
});

function yahooRequest(coordinates) {
    const yahooReq = new XMLHttpRequest();
    // Yahoo API which accepts coordinates in 'coordinates'
    var yahooString = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(SELECT%20woeid%20FROM%20geo.places%20WHERE%20text=%22(' + coordinates + ')%22)&format=json';

    yahooReq.open('GET', yahooString);

    yahooReq.onload = function() {
        if(yahooReq.readyState === 4) {
            if(yahooReq.status === 200) {
                const yahooData = JSON.parse(yahooReq.responseText);
                const currentTempF = yahooData.query.results.channel.item.condition.temp;
                const currentDescription = yahooData.query.results.channel.item.condition.text;
                const city = yahooData.query.results.channel.location.city;
                const province = yahooData.query.results.channel.location.region;
                writeWeather(currentTempF, currentDescription, city, province);
            }
        } else {
            alert('An error occurred, please refresh!');
        }
    };

    yahooReq.send();
}

function getCoords(callback) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var jsonLocation = position.coords.latitude.toString() + ',' + position.coords.longitude.toString();
        // 'callback' is put here because asynchronisity behavior. need to let getCurrentPosition finish then do something.
        // thus put inside function(position);
        callback(jsonLocation);
    });
}

function writeWeather(currentTempF, currentDescription, city, province) {
    // weatherBtn.style.display = 'none';
    document.getElementById('temp').innerHTML = currentTempF;
    document.getElementById('description').innerHTML = currentDescription;
    document.getElementById('location').innerHTML = city + ',' + province;
    document.getElementById('unit').innerHTML = 'F';
    document.getElementById('degree').innerHTML = '&#176';
}

function toggleTempUnit() {
    if(document.getElementById('unit').innerHTML === 'F') {
        document.getElementById('temp').innerHTML = ((document.getElementById('temp').innerHTML - 32) * 5 / 9).toPrecision(2);
        document.getElementById('unit').innerHTML = 'C';
    } else {
        document.getElementById('temp').innerHTML = (document.getElementById('temp').innerHTML * 1.8 + 32).toPrecision(2);
        document.getElementById('unit').innerHTML = 'F';
    }
}

// fade-out effect with pure JS;
// fade-in: change op -= to +=;
function fadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.001){
            clearInterval(timer);
            element.style.visibility = 'hidden';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.3;
    }, 50);
}

