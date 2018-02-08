// VARIABLES //
var phoebe = document.getElementById('phoebe');
var mario = document.getElementById('mario');
var popupImage = document.getElementById('popup-image');

// GALLERY MECHANICS //
if (window.innerWidth > 720) {
    function showPhoebeGallery() {
        document.getElementById('phoebe-gallery').style.right = '0%';
        phoebe.id = 'phoebe-stationary';
    };
    function closePhoebeGallery() {
        document.getElementById('phoebe-gallery').style.right = '-100%';
        document.getElementById('phoebe-stationary').id = 'phoebe';
    };
    function showMarioGallery() {
        document.getElementById('mario-gallery').style.left = '0%';
        phoebe.style.position = 'absolute';
        phoebe.style.right = '100%';
        mario.id = 'mario-stationary';
    };
    function closeMarioGallery() {
        document.getElementById('mario-gallery').style.left = '-100%';
        phoebe.style.position = 'relative';
        phoebe.style.right = 'auto';
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


document.onclick = function(e) {
    if (e.target.tagName == 'IMG') {
        var img = document.createElement('img');
        var image = e.target.getAttribute("src");
        img.setAttribute("src", image);

        popupImage.style.display = "flex";
        popupImage.appendChild(img);
        var image = "";
    };
};
popupImage.addEventListener('click', function() {
    popupImage.style.display = "none";
    popupImage.innerHTML = "";
});
