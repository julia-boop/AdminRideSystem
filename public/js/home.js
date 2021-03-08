function qs(element){
    return document.querySelector(element)
}

window.addEventListener('load', function(){
    let btn = document.querySelector('.btnMenu');
    let menuNav = document.querySelector('.sidebar');
    
    btn.addEventListener('click', function(){
        btn.classList.toggle('click');
        menuNav.classList.toggle('show');

    });
})