function toggleDarkMode() {
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark')
        document.documentElement.setAttribute('data-bs-theme', 'light');
    else
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    document.getElementById('btnSwitchIcon').classList.toggle('bi-moon-fill');
    document.getElementById('btnSwitchIcon').classList.toggle('bi-brightness-high-fill');
}
document.getElementById('btnSwitch').addEventListener('click', toggleDarkMode);
var applyTransition = function (container) {
    container.classList.add('page-transition-enter');
    setTimeout(function () {
        container.classList.remove('page-transition-enter');
        container.classList.add('page-transition-enter-active');
    }, 10);
};
var removeTransition = function (container) {
    container.classList.add('page-transition-exit');
    setTimeout(function () {
        container.classList.remove('page-transition-exit');
        container.classList.add('page-transition-exit-active');
    }, 10);
};
function transitions() {
    var container = document.querySelector('main');
    applyTransition(container);
    window.addEventListener('popstate', function () {
        removeTransition(container);
        setTimeout(function () {
            window.location.href = document.location.href;
        }, 500);
    });
    document.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function (event) {
            var target = event.target;
            // Verifica si el enlace tiene la clase .no-transition o cualquier otro criterio
            if (target.classList.contains('no-transition') || target.href === undefined || target.target === "_blank") {
                return; // Salta la transición si tiene la clase
            }
            event.preventDefault();
            removeTransition(container);
            setTimeout(function () {
                window.location.href = target.href;
            }, 500);
        });
    });
}
document.addEventListener('DOMContentLoaded', transitions);
