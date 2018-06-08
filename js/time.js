function setNotification() {
    var timeSet = $('#time-1').val();
    var hour = timeSet.substring(0, 2);
    var hourInt = parseInt(hour);
    var minute = timeSet.substring(3,5);
    var minuteInt = parseInt(minute);
    document.getElementById('night-time-set').style.color = 'black';
    document.getElementById('night-time-set').innerHTML = 'Success! Currently set to Every Night at ' + timeSet;

    var night = new Date();
    night.setDate(night.getDate());
    var every =new Date();
    every.setDate(night.getDate());
    every.setHours(hourInt);
    every.setMinutes(minuteInt);
    every.setSeconds(0);
    var every_night = new Date(every);


  cordova.plugins.notification.local.schedule({
    id: 1,
    title: 'Reminder to recite Suratul Mulk and Al-Sajdah',
    text: 'Tap here to read now',
    trigger:{
    hour: hourInt,
    minute: minuteInt
        },
    icon: 'res://icon',
    smallIcon: 'res://ic_popup_reminder',
    });window.plugins.toast.showLongTop("Successfully Enabled");
  
}


  
  cordova.plugins.notification.local.on("click", function (notification, state) {
        AdMob.hideBanner(); window.open('pages.html');
        }, this);
  

        

  
        
       
    

