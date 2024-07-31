
    function onbar() {
        document.querySelector('.header-two-hide').style.display = 'block';
    }

 function offbar() {
        const menu = document.querySelector('.header-two-hide');
        menu.style.animation = 'slideroff 1s ease-in-out';
        setTimeout(() => {
           menu.style.display = 'none';
        }, 800); // Match the duration of the animation
    }
