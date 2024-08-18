const applyTransition = (container: HTMLElement) => {
    container.classList.add('page-transition-enter');
    setTimeout(() => {
        container.classList.remove('page-transition-enter');
        container.classList.add('page-transition-enter-active');
    }, 10);
};

const removeTransition = (container: HTMLElement) => {
    container.classList.add('page-transition-exit');
    setTimeout(() => {
        container.classList.remove('page-transition-exit');
        container.classList.add('page-transition-exit-active');
    }, 10);
};

function transitions() {
    const container = document.querySelector('main') as HTMLElement;

    applyTransition(container);

    window.addEventListener('popstate', () => {
        removeTransition(container);
        setTimeout(() => {
            window.location.href = document.location.href;
        }, 500);
    });

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', event => {
            const target = event.target as HTMLAnchorElement;

            // Verifica si el enlace tiene la clase .no-transition o cualquier otro criterio
            if (target.classList.contains('no-transition') || target.href === undefined || target.target === "_blank") {
                return; // Salta la transición si tiene la clase
            }

            event.preventDefault();
            removeTransition(container);
            setTimeout(() => {
                window.location.href = target.href;
            }, 500);
        });
    });
}

document.addEventListener('DOMContentLoaded', transitions);