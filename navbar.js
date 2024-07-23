document.addEventListener('DOMContentLoaded', function() {
    let previousScrollPosition = 0;
    const headerElement = document.querySelector('header');

    window.addEventListener('scroll', function() {
        let currentScrollPosition = window.scrollY || document.documentElement.scrollTop;

        if (currentScrollPosition > previousScrollPosition) {
            headerElement.classList.add('hidden');
        } else {
            headerElement.classList.remove('hidden');
        }
        previousScrollPosition = currentScrollPosition;
    });
});