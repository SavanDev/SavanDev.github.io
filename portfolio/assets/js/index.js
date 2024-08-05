function toggleDarkMode() {
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark')
        document.documentElement.setAttribute('data-bs-theme', 'light');
    else
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    document.getElementById('btnSwitchIcon').classList.toggle('bi-moon-fill');
    document.getElementById('btnSwitchIcon').classList.toggle('bi-brightness-high-fill');
}
document.getElementById('btnSwitch').addEventListener('click', toggleDarkMode);
