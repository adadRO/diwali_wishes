const dock = document.getElementById('dock');
    const icons = document.querySelectorAll('.dock-icon');

    icons.forEach((icon, index) => {
      icon.addEventListener('mouseenter', () => handleHover(index));
      icon.addEventListener('mouseleave', resetIcons);
    });

    function handleHover(index) {
      icons.forEach((icon, i) => {
        if (i === index) {
          // Hovered icon: large size with shadow
          icon.style.width = '75px';
          icon.style.height = '75px';
          icon.style.transform = 'rotate(3deg) scale(1.2)';
        } else if (i === index - 1 || i === index + 1) {
          // Adjacent icons: slightly larger with subtle scaling
          icon.style.width = '55px';
          icon.style.height = '55px';
          icon.style.transform = 'scale(1.05)';
        } else {
          // Other icons: normal size
          icon.style.width = '40px';
          icon.style.height = '40px';
          icon.style.transform = 'scale(1)';
        }
      });
    }

    function resetIcons() {
      icons.forEach(icon => {
        icon.style.width = '40px'; // Reset to original width
        icon.style.height = '40px'; // Reset to original height
        icon.style.transform = 'scale(1) rotate(0)'; // Reset transform
      });
    }