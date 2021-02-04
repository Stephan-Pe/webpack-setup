class MyNavigation {
    navigate() {
    document.addEventListener("DOMContentLoaded", navigationInit());


    function toggleNav() {
        hamburger.addEventListener('click', function () {
            offcanvas.classList.toggle('open');

        });
    }

    function navigationInit() {
        const hamburger = document.querySelector('#hamburger');
        const offcanvas = document.querySelector('#offcanvas');
        // mobile navigation
        toggleNav();
    }
}  
}


export default MyNavigation;
