function toggleMenu() {
    const menu = document.getElementById('menu');
    const menubtn = document.getElementById('menubtn');
    const iconshow = document.getElementById('icon-show');
    const iconclose = document.getElementById('icon-close');
    
    menu.classList.toggle('hidden');
    iconshow.classList.toggle('hidden');
    iconclose.classList.toggle('hidden');
}
