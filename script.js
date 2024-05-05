window.onscroll = function () {
    scrollingFn();
};
function scrollingFn() {
    if (window.scrollY > 0) {
        document.querySelector('.navbar-wrap').classList.add('scrolled');
    } else {
        document.querySelector('.navbar-wrap').classList.remove('scrolled');
    }
}
