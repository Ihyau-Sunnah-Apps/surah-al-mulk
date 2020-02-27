
var success = "is successfully added to the translation";

$(function() {
    $(":checkbox").change(function(){
        if ($(this).is(":checked")) {
            loadContent("Trans/" + this.id + ".xml",$(this).attr("name")); localStorage.setItem(this.id, "Trans/" + this.id + ".xml");window.plugins.toast.showLongBottom($(this).attr("id") +" " + success);
        }
        else {
            localStorage.removeItem(this.id);
            location.reload();
        }
    });
});

var transCheckboxValues = JSON.parse(localStorage.getItem('transCheckboxValues')) || {};
var $checkboxes = $("#trans-checkbox-container :checkbox");

$checkboxes.on("change", function(){
    $checkboxes.each(function(){
        transCheckboxValues[this.id] = this.checked;
    });
    localStorage.setItem("transCheckboxValues", JSON.stringify(transCheckboxValues));
});

$.each(transCheckboxValues, function(key, value) {
    $("#" + key).prop('checked', value);

});