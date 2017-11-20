$(function() {
    $('#showdiv1').click(function() {
        $('div[id^=div]').hide();
        $('#div1').show();
    });
    $('#showdiv2').click(function() {
        $('div[id^=div]').hide();
        $('#div2').show();
    });
 
    $('#showdiv3').click(function() {
        $('div[id^=div]').hide();
        $('#div3').show();
    });
 
    $('#showdiv4').click(function() {
        $('div[id^=div]').hide();
        $('#div4').show();
    });
 
})




/*$(document).ready(function() {

var modal1 = document.getElementById('modal_1');

var btn1 = document.getElementById("modal_1Btn");

var span1 = document.getElementsByClassName("close")[0];

btn1.onclick = function() {
modal1.style.display = "block";
}

span1.onclick = function() {
modal1.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}


var modal2 = document.getElementById('modal_2');

var btn2 = document.getElementById("modal_2Btn");

var span2 = document.getElementsByClassName("close")[0];

btn2.onclick = function() {
modal2.style.display = "block";
}

span2.onclick = function() {
modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1 || event.target == modal2) {
    event.target.style.display = "none";
  }
}
}
/*

// Get the modal
var modal = document.getElementById('muffinsModal');

// Get the button that opens the modal
var btn = document.getElementById("muffinsBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

/*
// Get the modal
var applesauceModal = document.getElementById('applesauceModal');
var muffinsModal = document.getElementById('muffinsModal');
var turkeyBrineModal = document.getElementById('turkeyBrineModal');
var whiteChiliModal = document.getElementById('whiteChiliModal');
var marinatedPorkModal = document.getElementById('marinatedPorkModal');
var fruitSaladModal = document.getElementById('fruitSaladModal');
var soupModal = document.getElementById('soupModal');

// Get the button that opens the modal
var applesauceBtn = document.getElementById("applesauceBtn");
var muffinsBtn = document.getElementById("muffinsBtn");
var turkeyBrineBtn = document.getElementById("turkeyBrineBtn");
var whiteChiliBtn = document.getElementById("whiteChiliBtn");
var marinatedPorkBtn = document.getElementById("marinatedPorkBtn");
var fruitSaladBtn = document.getElementById("fruitSaladBtn");
var soupBtn = document.getElementById("soupBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
applesauceBtn.onclick = function() {
    applesauceModal.style.display = "block";
}

muffinsBtn.onclick = function() {
    muffinsModal.style.display = "block";
}

turkeyBrineBtn.onclick = function() {
    turkeyBrineModal.style.display = "block";
}

whiteChiliBtn.onclick = function() {
    whiteChiliModal.style.display = "block";
}

marinatedPorkBtn.onclick = function() {
    marinatedPorkModal.style.display = "block";
}

fruitSaladBtn.onclick = function() {
    fruitSaladModal.style.display = "block";
}

soupBtn.onclick = function() {
    soupModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    applesauceModal.style.display = "none";
}

span.onclick = function() {
    muffinsModal.style.display = "none";
}

span.onclick = function() {
    turkeyBrineModal.style.display = "none";
}

span.onclick = function() {
    whiteChiliModal.style.display = "none";
}

span.onclick = function() {
    marinatedPorkModal.style.display = "none";
}

span.onclick = function() {
    fruitSaladModal.style.display = "none";
}

span.onclick = function() {
    soupModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == applesauceModal) {
        applesauceModal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == muffinsModal) {
        muffinsModal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == turkeyBrineModal) {
        turkeyBrineModal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == whiteChiliModal) {
        whiteChiliModal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == marinatedPorkModal) {
        marinatedPorkModal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == fruitSaladModal) {
        fruitSaladModal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == soupModal) {
        soupModal.style.display = "none";
    }
}