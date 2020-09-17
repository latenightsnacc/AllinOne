let menuIcon = document.getElementsByClassName('menu-bar');

menuIcon.addEventListener('click', openSideBar => () {
    if(menuIcon.style.display == 'hidden'){
        menuIcon.removeClass('hide');
    }

    } 
)