var WEB_VERSION = "1.2";
var TIMER = 300;
document.addEventListener("DOMContentLoaded", function () {
    window.setTimeout(function () { return document.body.classList.remove('fade'); }, TIMER);
});
document.getElementById("beta-text").innerText = "BETA " + WEB_VERSION;
var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    if (links[i].hostname !== window.location.hostname || links[i].pathname === window.location.pathname)
        continue;
    links[i].addEventListener('click', function (event) {
        var anchor = event.currentTarget;
        var listener = function () { return window.location = anchor.href; };
        document.body.classList.add('fade');
        event.preventDefault();
        window.setTimeout(listener, TIMER);
    });
}
