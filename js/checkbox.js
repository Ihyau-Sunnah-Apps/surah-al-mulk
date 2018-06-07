$("#checkboxi").change(function() {
  if ($(this).is(":checked")){
    javascript:showhide('night-time');
    
}

else {
  document.getElementById('night-time').style.display = "none";
   cordova.plugins.notification.local.cancel(1, function() {
   window.plugins.toast.showLongTop("Successfully Disabled");
});

 }
 cordova.plugins.notification.local.on("click", function (notification, state) {
   admob.banner.hide(); window.open('pages.html');
}, this)

});
 

  $("#checkbox-container :checkbox").on("change", function(){
  
});
var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {};
var $checkboxes = $("#checkbox-container :checkbox");

$checkboxes.on("change", function(){
  $checkboxes.each(function(){
    checkboxValues[this.id] = this.checked;
  });
  localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
});
$.each(checkboxValues, function(key, value) {
  $("#" + key).prop('checked', value);
});



