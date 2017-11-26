var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
        var employees = JSON.parse(xhr.responseText);
        var statusHTML = '<ul class="bulleted">';
        for (var i=0; i<employees.length; i += 1) {
            employees[i].inoffice ? statusHTML += '<li class="in">' : statusHTML += '<li class="out">';
            statusHTML += employees[i].name;
            statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('employeeList').innerHTML = statusHTML;
    }
};
xhr.open('GET', '../data/employees.json');
xhr.send();


var room = new XMLHttpRequest();
room.onreadystatechange = function() {
    if(room.readyState === 4) {
        var roomStatus = JSON.parse(room.responseText);
        var roomHTML = '<ul class="rooms">';
        for(let j = 0; j < roomStatus.length; j++) {
            roomStatus[j].available ? roomHTML += '<li class="empty">' : roomHTML += '<li class="full">';
            roomHTML += roomStatus[j].room;
            roomHTML += '</li>';
        }
        roomHTML += '</ul>';
        document.getElementById('roomList').innerHTML = roomHTML;
    }
};

room.open("GET", "../data/rooms.json");

room.send();



