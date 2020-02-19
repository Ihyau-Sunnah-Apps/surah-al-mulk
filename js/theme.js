/*This script controls the theme of the app whether a light mode or dark mode*/

function activateNightMode() {
    /*Checks if the theme is default that is the light theme if default changes it to dark if not then revert back to default*/
    if( ! localStorage.getItem('theme') || localStorage.getItem('theme') == 'a') {
        localStorage.setItem("theme", "b");
    }
    else {
        localStorage.setItem("theme", "a");
    }
    location.reload(); //Reload page to apply changes.
    }


    if( localStorage.getItem('theme') == 'b' ) {
        document.getElementById('homepage').setAttribute('data-theme', 'b');
        document.getElementById('notifications').setAttribute('data-theme', 'b');
    
    } 