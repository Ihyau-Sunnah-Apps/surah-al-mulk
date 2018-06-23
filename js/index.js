var admobid = {
  banner: 'ca-app-pub-6981212130280607/2899891177',
    interstitial: 'ca-app-pub-6981212130280607/4376624370',
 };

document.addEventListener('deviceready', this.onDeviceReady, false);
     function onDeviceReady() {
        admob.banner.config({
        id: admobid.banner,
        isTesting: false,
        autoShow: true,
          })
        admob.banner.prepare()
        AdMob.createBannerView();
        welcomeScreen();
        AppRate.preferences.storeAppURL.android = 'market://details?id=com.ihyausunnah.surahalkahfmulk';
        AppRate.preferences.openStoreInApp = true;
        AppRate.preferences.displayAppName = 'Surah Al Mulk App';
        AppRate.preferences.usesUntilPrompt = 10;
        AppRate.preferences.promptAgainForEachNewVersion = false;
        AppRate.promptForRating(false);
        

        
     }

    