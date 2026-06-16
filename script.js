/* =========================================
   KOUSHAL MAHESH PATIL PORTFOLIO SCRIPT
   Cybersecurity + Big Data Portfolio
========================================= */


/* =========================================
   PARTICLE NETWORK BACKGROUND
========================================= */

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];


window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    initParticles();

});


class Particle {

    constructor() {

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 3 + 1;

        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;

        this.opacity = Math.random() * 0.5 + 0.2;
    }


    update() {

        this.x += this.speedX;
        this.y += this.speedY;


        if (
            this.x < 0 ||
            this.x > canvas.width ||
            this.y < 0 ||
            this.y > canvas.height
        ) {

            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
        }

    }


    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            `rgba(0,247,255,${this.opacity})`;

        ctx.fill();

    }

}


function initParticles() {

    particlesArray = [];

    for (let i = 0; i < 120; i++) {

        particlesArray.push(new Particle());

    }

}



function connectParticles() {


    for (let a = 0; a < particlesArray.length; a++) {


        for (let b = a + 1; b < particlesArray.length; b++) {


            let dx =
                particlesArray[a].x -
                particlesArray[b].x;


            let dy =
                particlesArray[a].y -
                particlesArray[b].y;


            let distance =
                Math.sqrt(dx * dx + dy * dy);


            if (distance < 120) {


                ctx.beginPath();


                ctx.strokeStyle =
                `rgba(0,247,255,${
                    1 - distance / 120
                })`;


                ctx.lineWidth = 0.5;


                ctx.moveTo(
                    particlesArray[a].x,
                    particlesArray[a].y
                );


                ctx.lineTo(
                    particlesArray[b].x,
                    particlesArray[b].y
                );


                ctx.stroke();

            }

        }

    }

}


function animateParticles() {


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particlesArray.forEach(
        particle => {

            particle.update();

            particle.draw();

        }
    );


    connectParticles();


    requestAnimationFrame(
        animateParticles
    );

}


initParticles();

animateParticles();



/* =========================================
   MOUSE GLOW FOLLOWER
========================================= */


const glow =
document.querySelector(".mouse-glow");


document.addEventListener(
    "mousemove",
    (e) => {

        glow.style.left =
        e.clientX + "px";

        glow.style.top =
        e.clientY + "px";

    }
);



/* =========================================
   TYPING ANIMATION
========================================= */


const typing =
document.querySelector(".typing");


const roles = [

    "CEH v13 Certified Ethical Hacker",

    "Cybersecurity Specialist",

    "Digital Forensics Researcher",

    "Web Application Security Tester",

    "Data & Big Data Analyst",

    "ETL Pipeline Developer"

];


let roleIndex = 0;
let charIndex = 0;
let deleting = false;


function typeText() {


    const current =
    roles[roleIndex];


    if (!deleting) {


        typing.textContent =
        current.substring(
            0,
            charIndex++
        );


        if (charIndex >
            current.length) {


            deleting = true;


            setTimeout(
                typeText,
                1500
            );

            return;

        }

    }


    else {


        typing.textContent =
        current.substring(
            0,
            charIndex--
        );


        if (charIndex < 0) {


            deleting = false;


            roleIndex++;


            if (
                roleIndex >= roles.length
            ) {

                roleIndex = 0;

            }

        }

    }


    setTimeout(
        typeText,
        deleting ? 50 : 90
    );

}


typeText();



/* =========================================
   ANIMATED COUNTERS
========================================= */


const counters =
document.querySelectorAll(".counter");


const counterObserver =
new IntersectionObserver(
(entries) => {


entries.forEach(entry => {


if (entry.isIntersecting) {


let counter =
entry.target;


let target =
Number(counter.dataset.target);


let count = 0;


let increment =
target / 80;


function updateCounter() {


count += increment;


if (count < target) {


counter.innerText =
Math.ceil(count);


requestAnimationFrame(
updateCounter
);


}

else {


counter.innerText = target;


}


}


updateCounter();


counterObserver.unobserve(counter);


}


});


},
{
threshold: 0.5
}
);


counters.forEach(counter => {

counterObserver.observe(counter);

});



/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */


const sections =
document.querySelectorAll(".reveal");


const revealObserver =
new IntersectionObserver(
(entries) => {


entries.forEach(entry => {


if (entry.isIntersecting) {


entry.target.style.opacity = "1";


entry.target.style.transform =
"translateY(0)";


}


});

},
{
threshold:0.2
}
);



sections.forEach(section => {


section.style.opacity = "0";


section.style.transform =
"translateY(60px)";


section.style.transition =
"all .8s ease";


revealObserver.observe(section);


});



/* =========================================
   MOBILE MENU TOGGLE
========================================= */


const menuBtn =
document.querySelector(".menu-btn");


const navLinks =
document.querySelector(".nav-links");


menuBtn.addEventListener(
"click",
() => {


navLinks.classList.toggle(
"active"
);


}
);



document.querySelectorAll(
".nav-links a"
).forEach(link => {


link.addEventListener(
"click",
() => {


navLinks.classList.remove(
"active"
);


}
);


});



/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */


const navbar =
document.querySelector(".navbar");


window.addEventListener(
"scroll",
() => {


if (
window.scrollY > 50
) {


navbar.style.background =
"rgba(5,8,22,.95)";


navbar.style.boxShadow =
"0 10px 40px rgba(0,247,255,.25)";


}


else {


navbar.style.background =
"rgba(5,8,22,.65)";


navbar.style.boxShadow =
"none";


}


}
);



/* =========================================
   PRELOADER FINISH EFFECT
========================================= */


window.addEventListener(
"load",
() => {

document.body.style.opacity = "1";

}
);

/* =========================================
   PROJECT CARD EXPAND/COLLAPSE
========================================= */

function toggleExpand(button) {
    const expandable = button.nextElementSibling;
    const arrow = button.querySelector('.arrow');
    
    expandable.classList.toggle('open');
    button.classList.toggle('open');
}


/* =========================================
   INTRO VIDEO CONTROLS
========================================= */

const introVideo = document.getElementById('introVideo');
const videoPlayBtn = document.getElementById('videoPlayBtn');
let audioHasPlayed = false;

if (introVideo) {
    // Ensure audio is not muted on first load
    introVideo.muted = false;
    introVideo.volume = 1;
    
    // Attempt to play with audio
    const playPromise = introVideo.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log('Autoplay policy blocked audio, attempting muted playback:', error);
            introVideo.muted = true;
            introVideo.play();
        });
    }

    // When video ends, show the play button
    introVideo.addEventListener('ended', () => {
        audioHasPlayed = true;
        videoPlayBtn.style.display = 'flex';
    });

    // If video is paused (user paused it), show play button
    introVideo.addEventListener('pause', () => {
        if (introVideo.currentTime < introVideo.duration - 0.5) {
            videoPlayBtn.style.display = 'flex';
        }
    });

    // Hide play button when video plays
    introVideo.addEventListener('play', () => {
        videoPlayBtn.style.display = 'none';
    });

    // Play button click handler - replay without audio
    videoPlayBtn.addEventListener('click', () => {
        introVideo.muted = true;
        introVideo.volume = 0;
        introVideo.currentTime = 0;
        introVideo.play();
    });
}