const animation = ScrollReveal({
    distance: '30px',
    duration: 1500,
    delay: 400,
    reset: true
})

animation.reveal('.hero-content, .heroimage, .service-content, .about-section, .footer-container',{
    delay: 200,
    origin:'bottom',
})
animation.reveal('.stats-section',{
    delay: 200,
    origin:'bottom',
})