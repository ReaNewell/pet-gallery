// VARIABLES //
var phoebe = document.getElementById('phoebe');
var mario = document.getElementById('mario');


// GALLERY MECHANICS //
if (window.innerWidth > 720) {
    function showPhoebeGallery() {
        document.getElementById('phoebe-gallery').style.right = '0%';
        document.getElementById('phoebe').id = 'phoebe-stationary';
    };
    function closePhoebeGallery() {
        document.getElementById('phoebe-gallery').style.right = '-100%';
        document.getElementById('phoebe-stationary').id = 'phoebe';
    };
    function showMarioGallery() {
        document.getElementById('mario-gallery').style.left = '0%';
        document.getElementById('phoebe').style.position = 'absolute';
        document.getElementById('phoebe').style.right = '100%';
        document.getElementById('mario').id = 'mario-stationary';
    };
    function closeMarioGallery() {
        document.getElementById('mario-gallery').style.left = '-100%';
        document.getElementById('phoebe').style.position = 'relative';
        document.getElementById('phoebe').style.right = 'auto';
        document.getElementById('mario-stationary').id = 'mario';
    };
} else {
    function showPhoebeGallery() {
        document.getElementById('phoebe-gallery').style.top = '0vh';
    }
    function closePhoebeGallery() {
        document.getElementById('phoebe-gallery').style.top = '100vh';
    };
    function showMarioGallery() {
        document.getElementById('mario-gallery').style.top = '0vh';
    };
    function closeMarioGallery() {
        document.getElementById('mario-gallery').style.top = '100vh';
    };
}
