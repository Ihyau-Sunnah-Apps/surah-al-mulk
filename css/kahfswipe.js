$( document ).on( "pageinit", "[data-role='page'].nd2-no-menu-swipe", function() {
	var page = "#" + $( this ).attr( "id" ),
		// Get the filename of the next page that we stored in the data-next attribute
		next = $( this ).jqmData( "next" ),
		// Get the filename of the previous page that we stored in the data-prev attribute
		prev = $( this ).jqmData( "prev" );
	
	// Check if we did set the data-next attribute
	if ( next ) {
		// Prefetch the next page
		$.mobile.loadPage( "kahf.html"+ next );
		// Navigate to next page on swipe left
		$( document ).on( "swipeleft", page, function() {
			$.mobile.changePage( "kahf.html"+ prev, { ajax: "false" });
		});
		// Navigate to next page when the "next" button is clicked
		$( ".control .next", page ).on( "click", function() {
			$.mobile.changePage( "kahf.html"+ prev, { ajax: "false" } );
		});
	}
	// Disable the "next" button if there is no next page
	else {
		$( ".control .next", page ).addClass( "ui-disabled" );
	}
	// The same for the previous page (we set data-dom-cache="true" so there is no need to prefetch)
	if ( prev ) {
		$( document ).on( "swiperight", page, function() {
			$.mobile.changePage( "kahf.html"+next  , { ajax: "false", reverse: true } );
		});
		$( ".control .prev", page ).on( "click", function() {
			$.mobile.changePage( "kahf.html" + next, { ajax: "false", reverse: true } );
		});
	}
	else {
		$( ".control .prev", page ).addClass( "ui-disabled" );
	}
});