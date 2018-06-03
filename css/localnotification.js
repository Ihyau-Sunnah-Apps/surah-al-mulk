document.addEventListener('deviceready', this.onDeviceReady, false);
	 function onDeviceReady() {
	 	 welcomeScreen();
         AppRate.preferences.storeAppURL.android = 'market://details?id=com.ihyausunnah.thesunnahrevival';
        AppRate.preferences.openStoreInApp = true;
        AppRate.preferences.displayAppName = 'The Sunnah Revival';
        AppRate.preferences.usesUntilPrompt = 10;
         AppRate.preferences.promptAgainForEachNewVersion = false;
         AppRate.promptForRating(false);

         
		
};

	
        
   


	 
	 