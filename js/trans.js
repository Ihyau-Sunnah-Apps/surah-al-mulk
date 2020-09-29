var surahIndex;
var tagName;
//Add ayah images to trans.html
function addImages() {
    var i, allImages ="", index = surahIndex + 1;
    //Loop through all ayah images
    for (i = 1; i<=30; i++) {
        allImages += "<strong><p class='ayah'><img class='center fit' src='images/" + index + "_" + i + ".png'/></p></strong><br>";
    }
    //Adds allImages to <div id="trans-container"/>
    document.getElementById("trans-container").innerHTML = allImages;

    //Sets ID of all <p>
    var idCount = 1;
    $('p').each(function() {
        $(this).attr('id', 'ayah' + idCount);
        idCount++;
    });
}

//Loads content according to the language which is passed as a parameter
function loadContent(trans, nameOfTranslator) {
    var xhttp = new XMLHttpRequest();
    console.log(nameOfTranslator);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", trans , true); //Open the xml file
    xhttp.send();

    function myFunction(xml) {
        var x, i, xmlDoc, txt, id;
        xmlDoc = xml.responseXML;
        txt = "";
        x = xmlDoc.getElementsByTagName(tagName); //Get all 'aya' tags in xml file
        //Loop through the tags and store them in var txt
        for (i = 1 ; i <x.length; i++) {
            id = "ayah" + i;
            txt = "<br>\n" + nameOfTranslator + ":<br>\n["+ x[i].getAttribute('index') + "] " + x[i].getAttribute('text') + "<br>\n";
            document.getElementById(id).innerHTML += txt;
        }
    }
};

function addArabicVerse() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            getTheAyah(this);

        }
    };
    xhttp.open("GET", "Trans/quran-uthmani.xml" , true); //Open the xml file
    xhttp.send();

    function getTheAyah(xml) {
        var x, i,j, xmlDoc, ayah = [];
        xmlDoc = xml.responseXML;
        x = xmlDoc.getElementsByTagName('sura')[surahIndex]; //Get Suratul Mulk in xml file
        for (j = 0 ; j < 30; j++) {
            i = x.getElementsByTagName('aya')[j];
            ayah[j] = "["+ i.getAttribute('index') + "] " + i.getAttribute('text');
        }
        var number = 0;
        $('img').each(function() {
            $(this).attr('alt', ayah[number]);
            number++;
        });

    }
}

addArabicVerse();

$(document).on("pagecreate","#mulk-translations",function(){
    $(".ayah").on("taphold",function(){

        var id  = $(this).attr('id');
        var ayahNumber = id.substring(4);
        var ayahNumberInt =parseInt(ayahNumber) - 1;
        var allAyahs = document.querySelectorAll("img");
        var fullAyah = allAyahs[ayahNumberInt].alt + "\n" + $("#" + id).text() + "\n\nSent from Surah Al Mulk & Al-Sajdah App\nHave a look at Surah Al Mulk & Al-Sajdah App Link:";
        window.plugins.socialsharing.share(fullAyah, null, null, 'https://rebrand.ly/mulk-app');

    });
});