var platformUrls = {
    youtube: 'https://www.youtube.com/results?search_query=',
    flipkart: 'https://www.flipkart.com/search?q=',
    amazon: 'https://www.amazon.in/s?k=',
    blinkit: 'https://blinkit.com/s/?q=',
    spotify: 'https://open.spotify.com/search/',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=',
    swiggy: 'https://www.swiggy.com/search?query='
};

var currentPlatform = "";
var youtubeBtn = document.getElementById('youtubeBtn');
var flipkartBtn = document.getElementById('flipkartBtn');
var amazonBtn = document.getElementById('amazonBtn');
var blinkitBtn = document.getElementById('blinkitBtn');
var spotifyBtn = document.getElementById('spotifyBtn');
var linkedinBtn = document.getElementById('linkedinBtn');
var swiggyBtn = document.getElementById('swiggyBtn');
var searchInput = document.getElementById('searchinput');
var searchButton = document.getElementById('searchbutton');

function makeButtonSelected(clickedButton, platformName) {
    youtubeBtn.style.backgroundColor = 'white';
    youtubeBtn.style.color = 'black';
    flipkartBtn.style.backgroundColor = 'white';
    flipkartBtn.style.color = 'black';
    amazonBtn.style.backgroundColor = 'white';
    amazonBtn.style.color = 'black';
    blinkitBtn.style.backgroundColor = 'white';
    blinkitBtn.style.color = 'black';
    spotifyBtn.style.backgroundColor = 'white';
    spotifyBtn.style.color = 'black';
    linkedinBtn.style.backgroundColor = 'white';
    linkedinBtn.style.color = 'black';
    swiggyBtn.style.backgroundColor = 'white';
    swiggyBtn.style.color = 'black';
    clickedButton.style.backgroundColor = 'orange';
    clickedButton.style.color = 'white';
    currentPlatform = platformName;
}
youtubeBtn.onclick = function() {
    makeButtonSelected(youtubeBtn, 'youtube');
};

flipkartBtn.onclick = function() {
    makeButtonSelected(flipkartBtn, 'flipkart');
};

amazonBtn.onclick = function() {
    makeButtonSelected(amazonBtn, 'amazon');
};

blinkitBtn.onclick = function() {
    makeButtonSelected(blinkitBtn, 'blinkit');
};

spotifyBtn.onclick = function() {
    makeButtonSelected(spotifyBtn, 'spotify');
};

linkedinBtn.onclick = function() {
    makeButtonSelected(linkedinBtn, 'linkedin');
};

swiggyBtn.onclick = function() {
    makeButtonSelected(swiggyBtn, 'swiggy');
};

function doSearch() {
    var searchText = searchInput.value;
    if (searchText == "") {
        alert('Please type something to search!');
        return;
    }
    if (currentPlatform == "") {
        alert('Please click on a platform first!');
        return;
    }
    searchText = searchText.trim();
    var encodedSearch = encodeURIComponent(searchText);
    var finalUrl = platformUrls[currentPlatform] + encodedSearch;
    window.open(finalUrl, '_blank');
}
searchButton.onclick = function() {
    doSearch();
};
searchInput.onkeydown = function(event) {
    if (event.keyCode == 13) { 
        doSearch();
    }
};
window.onload = function() {
    searchInput.focus();
};