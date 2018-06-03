//Loads content according to the language which is passed as a parameter
function loadContent(trans) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", trans , true); //Open the xml file
xhttp.send();

function myFunction(xml) {
    var x, i, xmlDoc, txt;
    xmlDoc = xml.responseXML;
    txt = "";
    x = xmlDoc.getElementsByTagName('aya'); //Get all 'ayam' tags in xml file
    //Loop through the tags and store them in var txt
    for (i = 1 ; i <x.length; i++) {
        txt += "<img class='center fit' src='images/32_" + i + ".png'/><br><strong>["+ x[i].getAttribute('index') + "] " + x[i].getAttribute('text') + "<br></strong>";
    }
    //Display the content of var txt in <div id="trans-container"/>
    document.getElementById("trans-container").innerHTML = txt;
    
    }
};

 
