$(document).ready(function () {
    $('#zoomIn').on('click', function () {
        zoomIn(1.2);
    });
    $('#zoomOut').on('click', function () {
        zoomOut();
    });
});

function zoomIn(zoomLev) {
    if (zoomLev > 1) {
        if (typeof (document.img.style.zoom) != "undefined") {
            $(document.img).css('zoom', zoomLev);
        }else {
            // Mozilla doesn't support zoom, use -moz-transform to scale and compensate for lost width
            $('#divWrap').css({
                "-moz-transform": 'scale(" + zoomLev + ")',
                width: $(window).width() / zoomLev
            });
        }
    }
}

function zoomOut() {
	$(document.body).css({
		zoom : '',
		position : '',
		left: "",
		top: "",
		"-moz-transform" : "",
		width : ''	
	});
}


$(document).ready(function () {
    $('#zoomIn1').on('click', function () {
        zoomIn(1.2);
    });
    $('#zoomOut1').on('click', function () {
        zoomOut();
    });
});

function zoomIn(zoomLev) {
    if (zoomLev > 1) {
        if (typeof (document.body.style.zoom) != "undefined") {
            $(document.body).css('zoom', zoomLev);
        }else {
            // Mozilla doesn't support zoom, use -moz-transform to scale and compensate for lost width
            $('#divWrap').css({
                "-moz-transform": 'scale(" + zoomLev + ")',
                width: $(window).width() / zoomLev
            });
        }
    }
}

function zoomOut() {
	$(document.body).css({
		zoom : '',
		position : '',
		left: "",
		top: "",
		"-moz-transform" : "",
		width : ''	
	});
}

$(document).ready(function () {
    $('#zoomIn2').on('click', function () {
        zoomIn(1.2);
    });
    $('#zoomOut2').on('click', function () {
        zoomOut();
    });
});

function zoomIn(zoomLev) {
    if (zoomLev > 1) {
        if (typeof (document.body.style.zoom) != "undefined") {
            $(document.body).css('zoom', zoomLev);
        }else {
            // Mozilla doesn't support zoom, use -moz-transform to scale and compensate for lost width
            $('#divWrap').css({
                "-moz-transform": 'scale(" + zoomLev + ")',
                width: $(window).width() / zoomLev
            });
        }
    }
}

function zoomOut() {
	$(document.body).css({
		zoom : '',
		position : '',
		left: "",
		top: "",
		"-moz-transform" : "",
		width : ''	
	});
}

$(document).ready(function () {
    $('#zoomIn3').on('click', function () {
        zoomIn(1.2);
    });
    $('#zoomOut3').on('click', function () {
        zoomOut();
    });
});

function zoomIn(zoomLev) {
    if (zoomLev > 1) {
        if (typeof (document.body.style.zoom) != "undefined") {
            $(document.body).css('zoom', zoomLev);
        }else {
            // Mozilla doesn't support zoom, use -moz-transform to scale and compensate for lost width
            $('#divWrap').css({
                "-moz-transform": 'scale(" + zoomLev + ")',
                width: $(window).width() / zoomLev
            });
        }
    }
}

function zoomOut() {
	$(document.body).css({
		zoom : '',
		position : '',
		left: "",
		top: "",
		"-moz-transform" : "",
		width : ''	
	});
}

$(document).ready(function () {
    $('#zoomIn4').on('click', function () {
        zoomIn(1.2);
    });
    $('#zoomOut4').on('click', function () {
        zoomOut();
    });
});

function zoomIn(zoomLev) {
    if (zoomLev > 1) {
        if (typeof (document.body.style.zoom) != "undefined") {
            $(document.body).css('zoom', zoomLev);
        }else {
            // Mozilla doesn't support zoom, use -moz-transform to scale and compensate for lost width
            $('#divWrap').css({
                "-moz-transform": 'scale(" + zoomLev + ")',
                width: $(window).width() / zoomLev
            });
        }
    }
}

function zoomOut() {
	$(document.body).css({
		zoom : '',
		position : '',
		left: "",
		top: "",
		"-moz-transform" : "",
		width : ''	
	});
}

$(document).ready(function () {
    $('#zoomIn5').on('click', function () {
        zoomIn(1.2);
    });
    $('#zoomOut5').on('click', function () {
        zoomOut();
    });
});

function zoomIn(zoomLev) {
    if (zoomLev > 1) {
        if (typeof (document.body.style.zoom) != "undefined") {
            $(document.body).css('zoom', zoomLev);
        }else {
            // Mozilla doesn't support zoom, use -moz-transform to scale and compensate for lost width
            $('#divWrap').css({
                "-moz-transform": 'scale(" + zoomLev + ")',
                width: $(window).width() / zoomLev
            });
        }
    }
}

function zoomOut() {
	$(document.body).css({
		zoom : '',
		position : '',
		left: "",
		top: "",
		"-moz-transform" : "",
		width : ''	
	});
}

$(document).ready(function () {
    $('#zoomIn6').on('click', function () {
        zoomIn(1.2);
    });
    $('#zoomOut6').on('click', function () {
        zoomOut();
    });
});

function zoomIn(zoomLev) {
    if (zoomLev > 1) {
        if (typeof (document.body.style.zoom) != "undefined") {
            $(document.body).css('zoom', zoomLev);
        }else {
            // Mozilla doesn't support zoom, use -moz-transform to scale and compensate for lost width
            $('#divWrap').css({
                "-moz-transform": 'scale(" + zoomLev + ")',
                width: $(window).width() / zoomLev
            });
        }
    }
}

function zoomOut() {
	$(document.body).css({
		zoom : '',
		position : '',
		left: "",
		top: "",
		"-moz-transform" : "",
		width : ''	
	});
}

$(document).ready(function () {
    $('#zoomIn7').on('click', function () {
        zoomIn(1.2);
    });
    $('#zoomOut7').on('click', function () {
        zoomOut();
    });
});

function zoomIn(zoomLev) {
    if (zoomLev > 1) {
        if (typeof (document.body.style.zoom) != "undefined") {
            $(document.body).css('zoom', zoomLev);
        }else {
            // Mozilla doesn't support zoom, use -moz-transform to scale and compensate for lost width
            $('#divWrap').css({
                "-moz-transform": 'scale(" + zoomLev + ")',
                width: $(window).width() / zoomLev
            });
        }
    }
}

function zoomOut() {
	$(document.body).css({
		zoom : '',
		position : '',
		left: "",
		top: "",
		"-moz-transform" : "",
		width : ''	
	});
}

$(document).ready(function () {
    $('#zoomIn8').on('click', function () {
        zoomIn(1.2);
    });
    $('#zoomOut8').on('click', function () {
        zoomOut();
    });
});

function zoomIn(zoomLev) {
    if (zoomLev > 1) {
        if (typeof (document.body.style.zoom) != "undefined") {
            $(document.body).css('zoom', zoomLev);
        }else {
            // Mozilla doesn't support zoom, use -moz-transform to scale and compensate for lost width
            $('#divWrap').css({
                "-moz-transform": 'scale(" + zoomLev + ")',
                width: $(window).width() / zoomLev
            });
        }
    }
}

function zoomOut() {
	$(document.body).css({
		zoom : '',
		position : '',
		left: "",
		top: "",
		"-moz-transform" : "",
		width : ''	
	});
}

$(document).ready(function () {
    $('#zoomIn9').on('click', function () {
        zoomIn(1.2);
    });
    $('#zoomOut9').on('click', function () {
        zoomOut();
    });
});

function zoomIn(zoomLev) {
    if (zoomLev > 1) {
        if (typeof (document.body.style.zoom) != "undefined") {
            $(document.body).css('zoom', zoomLev);
        }else {
            // Mozilla doesn't support zoom, use -moz-transform to scale and compensate for lost width
            $('#divWrap').css({
                "-moz-transform": 'scale(" + zoomLev + ")',
                width: $(window).width() / zoomLev
            });
        }
    }
}

function zoomOut() {
	$(document.body).css({
		zoom : '',
		position : '',
		left: "",
		top: "",
		"-moz-transform" : "",
		width : ''	
	});
}

$(document).ready(function () {
    $('#zoomIn10').on('click', function () {
        zoomIn(1.2);
    });
    $('#zoomOut10').on('click', function () {
        zoomOut();
    });
});

function zoomIn(zoomLev) {
    if (zoomLev > 1) {
        if (typeof (document.body.style.zoom) != "undefined") {
            $(document.body).css('zoom', zoomLev);
        }else {
            // Mozilla doesn't support zoom, use -moz-transform to scale and compensate for lost width
            $('#divWrap').css({
                "-moz-transform": 'scale(" + zoomLev + ")',
                width: $(window).width() / zoomLev
            });
        }
    }
}

function zoomOut() {
	$(document.body).css({
		zoom : '',
		position : '',
		left: "",
		top: "",
		"-moz-transform" : "",
		width : ''	
	});
}

$(document).ready(function () {
    $('#zoomIn11').on('click', function () {
        zoomIn(1.2);
    });
    $('#zoomOut11').on('click', function () {
        zoomOut();
    });
});

function zoomIn(zoomLev) {
    if (zoomLev > 1) {
        if (typeof (document.body.style.zoom) != "undefined") {
            $(document.body).css('zoom', zoomLev);
        }else {
            // Mozilla doesn't support zoom, use -moz-transform to scale and compensate for lost width
            $('#divWrap').css({
                "-moz-transform": 'scale(" + zoomLev + ")',
                width: $(window).width() / zoomLev
            });
        }
    }
}

function zoomOut() {
	$(document.body).css({
		zoom : '',
		position : '',
		left: "",
		top: "",
		"-moz-transform" : "",
		width : ''	
	});
}
