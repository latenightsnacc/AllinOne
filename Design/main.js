let menuIcon = document.getElementsById('menu-icon');

menuIcon.addEventListener('click', function openSideBar() {

    if(menuIcon.style.display == 'hidden'){
        menuIcon.removeClass('hide');
    }

    } 
)