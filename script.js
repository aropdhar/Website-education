// navbar responsive Section

let menu = document.querySelector('#menubar');
let navbar = document.querySelector('.navbar');



menu.onclick = () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll= () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// slide section


const sr = ScrollReveal({

    distance: '60px' ,
    duration: 2500 ,
    reset: true

});

// home section

sr.reveal('.home_text' , {delay:200 , origin: 'left'});
sr.reveal('.home_img' , {delay:200 , origin: 'right'});


// course section

sr.reveal('.course_main' , {delay:200 , origin: 'top'});

// course card section

sr.reveal('#course_1' , {delay:200 , origin:'top'});
sr.reveal('#course_2' , {delay:200 , origin:'left'});
sr.reveal('#course_3' , {delay:200 , origin:'bottom'});
sr.reveal('#course_4' , {delay:200 , origin:'right'});
sr.reveal('#course_5' , {delay:200 , origin:'top'});
sr.reveal('#course_6' , {delay:200 , origin:'left'});

// footer section

sr.reveal('.footer_main' , {delay:200 , origin: 'bottom'});

// teacher section

sr.reveal('.teacher_main' , {delay:200 , origin: 'top'});

// teacher card section

sr.reveal('#teacher_1' , {delay:200 , origin:'top'});
sr.reveal('#teacher_2' , {delay:200 , origin:'left'});
sr.reveal('#teacher_3' , {delay:200 , origin:'bottom'});
sr.reveal('#teacher_4' , {delay:200 , origin:'right'});


// price card section

sr.reveal('.price_main' , {delay:200 , origin: 'top'});

// contact section

sr.reveal('.contact_main img' , {delay:200 , origin: 'top'});

sr.reveal('.contact_form' , {delay:200 , origin: 'bottom'});