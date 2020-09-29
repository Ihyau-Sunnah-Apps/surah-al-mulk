document.addEventListener('deviceready', this.onDeviceReady, false);

function onDeviceReady() {
   var date = new Date();
   var day = date.getDate();

   var update = window.localStorage.getItem("update");
   if (update != day) {
      // Create a request variable and assign a new XMLHttpRequest object to it.
      var request = new XMLHttpRequest()

      // Open a new connection, using the GET request on the URL endpoint
      request.open('GET', 'https://us-central1-sunnah-assistant.cloudfunctions.net/checkSurahAlMulkUpdate', true)

      request.onload = function () {
         // Begin accessing JSON data here
         if (request.status == 200) {
            document.getElementById("update").style.display = "block"
         }
         window.localStorage.setItem("update", day);
      }
      // Send request
      request.send()
   } 

   AppRate.preferences.storeAppURL.android = 'market://details?id=com.ihyausunnah.surahalkahfmulk';
   AppRate.preferences.openStoreInApp = true;
   AppRate.preferences.displayAppName = 'Surah Al Mulk App';
   AppRate.preferences.usesUntilPrompt = 10;
   AppRate.preferences.promptAgainForEachNewVersion = false;
   AppRate.promptForRating(false);
}