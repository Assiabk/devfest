
document.addEventListener("DOMContentLoaded", () => {

    const timeline = gsap.timeline();

    timeline.from(".welcoming_devfest h1", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power2.out",
    });

    timeline.from(".welcoming_devfest p", {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: "power2.out",
    }, "-=0.5"); 

    timeline.from(".icons i", {
        duration: 1,
        scale: 0.5,
        opacity: 0,
        stagger: 0.2,
        ease: "bounce.out",
    });


    timeline.from(".down-arrow", {
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: "power2.out",
    }, "-=0.5");
});


document.querySelector(".down-arrow").addEventListener("click", (e) => {
    e.preventDefault();
    const nextSection = document.querySelector("#next_section");
    nextSection.scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
    gsap.from("#defining_event .text-content", {
        scrollTrigger: {
            trigger: "#defining_event",
            start: "top 80%",
        },
        duration: 1,
        x: -50,
        opacity: 0,
        ease: "power2.out",
    });

    gsap.from("#defining_event .image-content img", {
        scrollTrigger: {
            trigger: "#defining_event",
            start: "top 80%",
        },
        duration: 1,
        x: 50,
        opacity: 0,
        ease: "power2.out",
    });
});
document.addEventListener("DOMContentLoaded", () => {

    const downArrow = document.querySelector(".down-arrow");

    downArrow.addEventListener("click", (e) => {
        e.preventDefault(); 
        const targetSection = document.querySelector("#defining_event");

   //pour le navigation vers next section 
        targetSection.scrollIntoView({
            behavior: "smooth", 
            block: "start"    
        });
    });
});

window.onload = () => {

    const leftImages = document.querySelectorAll('.left_images .img_left1, .left_images .img_left2, .left_images .img_left3');
    const rightImages = document.querySelectorAll('.right_images .img_right1, .right_images .img_right2, .right_images .img_right3');

    gsap.fromTo(leftImages, 
        { opacity: 0, x: -200, scale: 0.5 }, 
        { 
            opacity: 1, 
            x: 0, 
            scale: 1, 
            stagger: 0.3, 
            duration: 1.5, 
            ease: "power3.out", 
            repeat: -1,
            yoyo: true 
        }
    );


    gsap.fromTo(rightImages, 
        { opacity: 0, x: 200, scale: 0.5 },
        { 
            opacity: 1, 
            x: 0, 
            scale: 1, 
            stagger: 0.3, 
            duration: 1.5, 
            ease: "power3.out", 
            repeat: -1,
            yoyo: true 
        }
    );
};

window.addEventListener('DOMContentLoaded', () => {
    gsap.from('.image-content .image', {
     
        y: 50, 
        scale: 0.95,
        rotate: 10,
        stagger: 0.2, 
        duration: 1.5,
        ease: 'power3.out', 
    });

    const images = document.querySelectorAll('.image-content .image');
    images.forEach(image => {
        image.addEventListener('mouseenter', () => {
            gsap.to(image, {
                scale: 1.05,
                rotate: 0,
                duration: 0.3,
                ease: 'power1.inOut',
            });
        });

        image.addEventListener('mouseleave', () => {
            gsap.to(image, {
                scale: 1,
                rotate: 10,
                duration: 0.3,
                ease: 'power1.inOut',
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('registration-form');
    const modal = document.getElementById('alert-modal');
    const alertMessage = document.getElementById('alert-message');
    const closeModal = document.getElementById('close-modal');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        if (name) {
            alertMessage.textContent = `Thank you, ${name}! You've successfully registered for DevFest 24.`;
            modal.classList.remove('hidden'); // Show modal
        }
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden'); // Hide modal
    });
});
