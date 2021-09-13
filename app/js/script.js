const siteHeader = document.querySelector('.header');
// const overlay = document.querySelector('.overlay');
const btnMenuGraphic = document.querySelector('.navbar__button');
const menuGraphic = document.querySelector('#menuGraphic');
const navbar = document.querySelector('.navbar')
// const pageBody = document.querySelector('body')

btnMenuGraphic.addEventListener('click', function(){
    

    if(siteHeader.classList.contains('open')){
         
        //rotate menu button backward
        menuGraphic.classList.remove('rotate-forward-360')
        menuGraphic.classList.add('rotate-reverse-360')

        //swap menu button graphic red to white
        menuGraphic.src="app/images/open.svg"


        //apply fade out animation to overlay
        // overlay.classList.remove('fade-in')
        // overlay.classList.add('fade-out')
        
        //hide overlay - need to wait 300ms to allow for fade animation before hiding
        setTimeout(function(){overlay.classList.add('hidden')},300);
       

        //close mobile menu
        siteHeader.classList.remove('open')

    }
    else{
        //open mobile menu view
        siteHeader.classList.add('open')

        //add overlay to page
        // overlay.classList.remove('hidden')

        //apply fade in animation
        // overlay.classList.add('fade-in')
        // overlay.classList.remove('fade-out')

        //rotate menu button forward
        menuGraphic.classList.remove('rotate-reverse-360')
        menuGraphic.classList.add('rotate-forward-360')

        //swap menu button graphic white to red
        menuGraphic.src="app/images/close.svg"
    }
  
   
});






document.addEventListener('scroll',function(){
    // var sticky = header.offsetTop;
    if (window.pageYOffset >= 50){
        siteHeader.classList.add("scroll")
        // pageBody.classList.remove('custom-offset')
    }
    else{
        siteHeader.classList.remove("scroll");
        // pageBody.classList.add('custom-offset')
    }
});
