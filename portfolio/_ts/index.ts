const webVersion : string = "1.1";
let opacityTemp : number = 0;

window.addEventListener('load', () => {
    bodyOpacity();
});

async function bodyOpacity()
{
    if (opacityTemp < 1)
    {
        opacityTemp += .1;
        document.body.style.opacity = opacityTemp.toString();
        console.log(opacityTemp);
        await sleep(50);
        bodyOpacity();
    }
}

function sleep(ms: number)
{
    return new Promise((resolve) => setTimeout(resolve, ms));
}

document.getElementById("beta-text").innerText = `BETA ${webVersion}`;