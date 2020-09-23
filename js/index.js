document.addEventListener('deviceready', this.onDeviceReady, false);
     function onDeviceReady() {
         var date = new Date();
         var day = date.getDate();
         var update = window.localStorage.getItem("update");
         if(update != day){
            window.localStorage.setItem("update", day);
         }
         else {
            document.getElementById("update").style.display = "none"   
         }
        AppRate.preferences.storeAppURL.android = 'market://details?id=com.ihyausunnah.surahalkahfmulk';
        AppRate.preferences.openStoreInApp = true;
        AppRate.preferences.displayAppName = 'Surah Al Mulk App';
        AppRate.preferences.usesUntilPrompt = 10;
        AppRate.preferences.promptAgainForEachNewVersion = false;
        AppRate.promptForRating(false);
     }

    