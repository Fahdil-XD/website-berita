// Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger');
    const closeIcon = document.getElementById('closeicon');

    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      hamburgerIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });