var loader = document.getElementById("preloader");
window.addEventListener("load", function(load){
    window.removeEventListener("load",load,false);
    setTimeout(function(){ loader.style.display = "none"
},1000);
},false)

ScrollReveal({
    reset:true,
    distance:'60px',
    duration:2500,
    delay:400
});
ScrollReveal().reveal("header" ,{ delay:1500, origin:'top' });
ScrollReveal().reveal(".col" ,{ delay:600, origin:'left' });
ScrollReveal().reveal(".content-reveal" ,{ delay:1000, origin:'top' });
ScrollReveal().reveal(".btn" ,{ delay:500, origin:'left' });
ScrollReveal().reveal(".heading" ,{ delay:500, origin:'left' });
ScrollReveal().reveal(".video-container" ,{ delay:700, origin:'left' });
ScrollReveal().reveal(".content" ,{ delay:500, origin:'left' });
ScrollReveal().reveal("#iconz" ,{ delay:400, origin:'top' });
ScrollReveal().reveal(".box" ,{ delay:500, origin:'bottom' });



