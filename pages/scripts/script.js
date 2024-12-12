gsap.timeline({ repeat: -1 }) 
    .to(".circle", {
        duration: 1,
        scale: 1,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.2
    })
    .to("#Welcoming_devfest h1", {
        duration: 1,
        opacity: 1,
        y: -20,
        ease: "power3.out"
    }, "-=0.5")
    .to("#Welcoming_devfest h2", {
        duration: 1,
        opacity: 1,
        y: -10,
        ease: "power3.out"
    }, "-=0.5")
    .to(".circle", {
        duration: 1,
        x: 0,
        y: 0,
        stagger: 0.2,
        scale: 0,
        delay: 1
    })
    .to(["#Welcoming_devfest h1", "#Welcoming_devfest h2"], {
        opacity: 0,
        duration: 0.5
    });
    document.addEventListener("DOMContentLoaded", () => {

        gsap.to(".scroll-arrow", {
            y: 20,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
 
        const scrollArrow = document.getElementById("scroll-arrow");
        const targetSection = document.getElementById("whats-devfest");
    
        scrollArrow.addEventListener("click", () => {
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
    
    // Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Animating the heading with a smooth slide and fade (slower version)
    gsap.from("#whats-devfest .content h2", {
        opacity: 0,
        y: -30,
        duration: 3, 
        ease: "power3.out",
        delay: 0.3,
        repeat: -1,  
        yoyo: true   
    });


    gsap.from("#whats-devfest .content p", {
        opacity: 0,
        y: 50,
        duration: 3,  
        ease: "power3.out",
        delay: 0.5,
        repeat: -1, 
        yoyo: true   
    });


    gsap.from("#whats-devfest .image-container img", {
        opacity: 0,
        scale: 0.8,
        rotation: 5,
        duration: 4,  
        ease: "power3.out",
        delay: 0.7,
        repeat: -1,  
        yoyo: true    
    });
});
