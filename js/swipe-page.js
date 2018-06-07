$(document).ready(function () {
	var mulkPageNumber = 562;//Stores Page Number of Mulk
  var sajdahPageNumber = 418;//Stores Page Number of Al-Sajdah
	$("#mulk-pages").swiperight(function () {
       //Navigate to the next Image when swiping right
 	
 	if (mulkPageNumber <564) {
           mulkPageNumber++;//Increment the pageNumber by 1
           var img = document.getElementById('mulk-page').src = "images/" + mulkPageNumber +'.jpg';
           
        }
        else {
          window.plugins.toast.showLongBottom('This is the last page');
        }
});
    
	$("#mulk-pages").swipeleft(function () {
       //Navigate to the previous Image when swiping left
	if (mulkPageNumber > 562) {
           mulkPageNumber--;//decrement the pageNumber by 1
           var img = document.getElementById('mulk-page').src = "images/" + mulkPageNumber +'.jpg';

        }
        else {
          window.plugins.toast.showLongBottom('This is the first page. Swipe right to move to next page');
        }
    
	});

$("#sajdah-pages").swiperight(function () {
       //Navigate to the next Image when swiping right
  
  if (sajdahPageNumber <420) {
           sajdahPageNumber++;//Increment the pageNumber by 1
           var img = document.getElementById('sajdah-page').src = "images/" + sajdahPageNumber +'.jpg';
           
        }
        else {
          window.plugins.toast.showLongBottom('This is the last page');
        }
});
    
  $("#sajdah-pages").swipeleft(function () {
       //Navigate to the previous Image when swiping left
  if (sajdahPageNumber > 418) {
           sajdahPageNumber--;//decrement the pageNumber by 1
           var img = document.getElementById('sajdah-page').src = "images/" + sajdahPageNumber +'.jpg';

        }
        else {
          window.plugins.toast.showLongBottom('This is the first page. Swipe right to move to next page');
        }
    
  });


	});