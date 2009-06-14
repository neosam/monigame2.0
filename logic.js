/* AJAX object */
var xmlhttp;

/* Gamefield div */
var gf;

function ajaxFunction()
{
    if (window.XMLHttpRequest)
        xmlhttp = new XMLHttpRequest();
    else if (window.ActiveXObject)
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    else
        gf.innerHTML = "Dein Browser unterst&uuml;tzt kein XMLHTTP";

    xmlhttp.onreadystatechange=function()
    {
        gf.innerHTML = xmlhttp.responseText;
    }

    xmlhttp.open("GET", "test.xml", true);
    xmlhttp.send(null);
}


/* Modulo operator which can handle negative numbers */
function mod(x, y) {
    var res = x % y;
    if (res < 0)
        return res + y;
    else
        return res;
}

function Room(id, rooms)
{
    this.id = id;
    this.rooms = rooms;
    this.room = 0;
    this.images = new Array();

    for (var i = 0; i < rooms; i++) {
        this.images.push(new Image());
        this.images[i].src = id + "/roomimg" + i + ".jpg";
    }

    this.turnRight = function() {
        this.room = mod(this.room + 1, this.rooms);
    }

    this.turnLeft = function() {
        this.room = mod(this.room - 1, this.rooms);
    }
}

function initFunction()
{
    ajaxFunction();
    gf = document.getElementById('gamefield');
    r = new Room('testroom', 4);
    //gf.innerHTML = "Hallo Welt";
}
