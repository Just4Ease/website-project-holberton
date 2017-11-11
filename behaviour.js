document.addEventListener("DOMContentLoaded", function (event) {
    let thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener('click', function () {
        // alert('I saw you click');
        if (thumbnailElement.className === 'image-fun') {
            thumbnailElement.className = '';
        } else {
            thumbnailElement.className = 'image-fun';
        };
    })







    /**
     * On Click, check if the menu is closed, so as to open it.
     * also if open, so as to close it.
     * This is to create a "toggle" effect;
     */
    let menuIcon = document.getElementById('mobile-menu-icon');
    let menuList = document.getElementById('mobile-menu-links');
    menuIcon.addEventListener('click', () => {
        if (menuList.className.includes('isClosed')) {
            // Open the menu;
            menuIcon.className = 'ion-android-close';
            menuList.className = 'menu-links';

        } else {
            // Close the menu;
            menuIcon.className = 'ion-android-menu';
            menuList.className = 'menu-links isClosed';
        }
    })
});