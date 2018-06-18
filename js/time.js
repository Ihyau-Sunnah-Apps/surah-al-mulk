function setNotification() {
    var timeSet = $('#time-1').val();
    var hour = timeSet.substring(0, 2);
    var hourInt = parseInt(hour);
    var minute = timeSet.substring(3,5);
    var minuteInt = parseInt(minute);
    document.getElementById('night-time-set').style.color = 'black';
    document.getElementById('night-time-set').innerHTML = 'Success! Currently set to Every Night at ' + timeSet;

    


  cordova.plugins.notification.local.schedule({
    id: 1,
    title: 'Reminder to recite Suratul Mulk and Al-Sajdah',
    text: 'Tap here to read now',
    trigger:{
        every: {
                    hour: hourInt,
                    minute: minuteInt
                }
        },
    actions: [
        { id: 'remind', title: 'Remind Others' }
    ]
    icon: 'res://icon',
    smallIcon: 'res://ic_popup_reminder',
    });window.plugins.toast.showLongTop("Successfully Enabled");

  cordova.plugins.notification.local.on('remind', function (notification, eopts) { window.plugins.socialsharing.share('I am reminding you to read Surah Al Mulk and Al Sajdah its the Sunnah of our beloved Prophet Muhammad (peace and blessings of Allaah be upon him).\n\nIt was narrated that ‘Abd-Allaah ibn Mas’ood said: \n\nWhoever readsTabaarak allaahi bi yadihi’l-mulk[i.e., Soorat al-Mulk] every night, Allaah will protect him from the torment of the grave. At the time of the Messenger of Allaah (peaceand blessings of Allaah be upon him) we used to call ital- maani’ah(that which protects). In the Book of Allaah it is a soorah which, whoever recites it every night has done very well. \n\nNarrated by al-Nasaa’i, 6/179;\n\nIt was narrated from Jaabir, that the Prophet (peace and blessings of Allaah be upon him) never used to sleep until he had recitedAlif-laam-meem tanzeel[al-Sajdah] andTabaarak alladhi bi yadihi’l-mulk[al-Mulk].\n\n Narrated by al-Tirmidhi, 2892; Ahmad, 14249. Al-Albaani said inSaheeh al-Tirmidhi(3/6) that this hadeeth is saheeh.\n\nSent from Surah Al Mulk android App http://bit.ly/mulk-app\n\nDont have an android phone read online', null, null, 'thesunnahrevival.github.io'); });
  
}


  
  cordova.plugins.notification.local.on("click", function (notification, state) {
        AdMob.hideBanner(); window.open('pages.html');
        }, this);
        
  

        

  
        
       
    

