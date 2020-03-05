document.addEventListener('deviceready', this.onDeviceReady, false);
     function onDeviceReady() {
        welcomeScreen();
        AppRate.preferences.storeAppURL.android = 'market://details?id=com.ihyausunnah.surahalkahfmulk';
        AppRate.preferences.openStoreInApp = true;
        AppRate.preferences.displayAppName = 'Surah Al Mulk App';
        AppRate.preferences.usesUntilPrompt = 10;
        AppRate.preferences.promptAgainForEachNewVersion = false;
        AppRate.promptForRating(false);
     }

    