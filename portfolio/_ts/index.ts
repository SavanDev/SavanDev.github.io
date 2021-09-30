const WEB_VERSION : string = "1.2";
const TIMER : number = 300;

document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(() => document.body.classList.remove('fade'), TIMER);
});

document.getElementById("beta-text").innerText = `BETA ${WEB_VERSION}`;

var links = document.getElementsByTagName('a');

for (let i=0; i < links.length; i++)
{
    if (links[i].hostname !== window.location.hostname || links[i].pathname === window.location.pathname)
        continue;

    links[i].addEventListener('click', (event:any) => {
        let anchor = event.currentTarget;
        let listener = () => window.location = anchor.href;
        document.body.classList.add('fade');
        event.preventDefault();
        window.setTimeout(listener, TIMER);
    })
}