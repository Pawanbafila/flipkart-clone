
    function onbar() {
        const menu = document.querySelector('.header-two-hide');
        menu.style.animation = 'slideron 1s ease-in-out';
        setTimeout(() => {
           menu.style.display = 'block';
        }, 0.1); // Match the duration of the animation

    }

 function offbar() {
        const menu = document.querySelector('.header-two-hide');
        menu.style.animation = 'slideroff 1s ease-in-out';
        setTimeout(() => {
           menu.style.display = 'none';
        }, 800); // Match the duration of the animation
    }
