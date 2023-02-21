const div = document.querySelector('.main');
window.onscroll=function(){
    var top = window.scrollY;
    console.log(top);
    if (top >=  250){
        main.classList.add('active')
        
    }else{
        main.classList.remove('active');


    }


}