//Check if Mulk file Exists in user storage if exists play it if not download/stream

function checkMulkFile() {

var permissions = cordova.plugins.permissions;
permissions.checkPermission(permissions.WRITE_EXTERNAL_STORAGE, openMulkFile(), permissions.requestPermission(permissions.WRITE_EXTERNAL_STORAGE));

}

function openMulkFile() {
	$.ajax({
url:'file:///storage/emulated/0/Download/Surah Al-Mulk.mp4',
type:'HEAD',
error: function()
{
    //file not exists
function onMulkConfirm(buttonIndex) {
  if (buttonIndex==1) {
window.open('https://www.dropbox.com/s/q66huz20rjzxasg/Surah%20Al-Mulk.mp4?dl=1','_system')
} else if (buttonIndex==2) {
 $("#popupmulkvideo").popup("open");
} else {

};
    
};
navigator.notification.confirm(
    'Would you like to download the file so as its available offline next time or Just play without downloading?', // message
     onConfirm,            // callback to invoke with index of button pressed
    'Download/Play (Abdurrahman As-Sudais)',           // title
    ['Download (12.2MB)','Play without downloading']     // buttonLabels
);
},
success: function()
{
    //file exists
window.plugins.toast.showLongBottom('Starting player please wait...', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});playVideo(document.getElementById("vidMulkUrl").value);
}
});

};

//Check if Sajdah file Exists in user storage if exists play it if not download/stream

function checkSajdahFile() {

var permissions = cordova.plugins.permissions;
permissions.checkPermission(permissions.WRITE_EXTERNAL_STORAGE, openSajdahFile(), permissions.requestPermission(permissions.WRITE_EXTERNAL_STORAGE));

}

function openSajdahFile() {
	$.ajax({
url:'file:///storage/emulated/0/Download/Surah Al-Sajdah.mp4',
type:'HEAD',
error: function()
{
    //file not exists
function onMulkConfirm(buttonIndex) {
  if (buttonIndex==1) {
window.open('https://www.dropbox.com/s/rgdgmadl4wx6gpf/Surah%20Al-Sajdah.mp4?dl=1','_system')
} else if (buttonIndex==2) {
 $("#popupsajdahvideo").popup("open");
} else {

};
    
};
navigator.notification.confirm(
    'Would you like to download the file so as its available offline next time or Just play without downloading?', // message
     onConfirm,            // callback to invoke with index of button pressed
    'Download/Play (Abdurrahman As-Sudais)',           // title
    ['Download (11.3MB)','Play without downloading']     // buttonLabels
);
},
success: function()
{
    //file exists
window.plugins.toast.showLongBottom('Starting player please wait...', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});playVideo(document.getElementById("vidSajdahUrl").value);
}
});

}

       


      