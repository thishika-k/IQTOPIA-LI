document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

function startAdventure() {
    alert("Welcome to IQTOPIA! Let's start your journey.");
}

function startGame(gameType) {
    if (gameType === "memory") {
        alert("Memory Match: Find matching pairs of images!");
    } else if (gameType === "puzzle") {
        alert("Puzzle Quest: Solve the puzzle to reveal a magical story!");
    }
}

function startIQTest() {
    let score = 0;
    let q1 = prompt("What is 2 + 2?");
    if (q1 == "4") score++;
    let q2 = prompt("Which image matches the first one? (Visual selection needed)");
    score++; 
    alert("Your IQ Test Score: " + score + "/2");
}

document.addEventListener('DOMContentLoaded', function() {
    // Create stars
    for (let i = 0; i < 50; i++) {
        createStar();
    }
    
    // Create clouds
    for (let i = 0; i < 5; i++) {
        createCloud();
    }
});

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Random size between 2px and 4px
    const size = Math.random() * 2 + 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    // Random position
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    
    // Random animation duration
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    
    document.body.appendChild(star);
}

function createCloud() {
    const cloud = document.createElement('div');
    cloud.classList.add('cloud');
    
    // Random size and shape
    const width = Math.random() * 100 + 100;
    const height = width * 0.6;
    cloud.style.width = `${width}px`;
    cloud.style.height = `${height}px`;
    
    // Random position (vertical only)
    cloud.style.top = `${Math.random() * 70}%`;
    
    // Random animation speed
    const duration = Math.random() * 60 + 60;
    cloud.style.animationDuration = `${duration}s`;
    
    // Add bubbles to create cloud shape
    for (let i = 0; i < 8; i++) {
        const bubble = document.createElement('div');
        bubble.style.position = 'absolute';
        bubble.style.backgroundColor = 'white';
        const bubbleSize = Math.random() * 30 + 30;
        bubble.style.width = `${bubbleSize}px`;
        bubble.style.height = `${bubbleSize}px`;
        bubble.style.borderRadius = '50%';
        bubble.style.top = `${Math.random() * 50}%`;
        bubble.style.left = `${Math.random() * 80}%`;
        cloud.appendChild(bubble);
    }
    
    document.body.appendChild(cloud);
    
    // Remove and recreate cloud when animation ends
    setTimeout(() => {
        cloud.remove();
        createCloud();
    }, duration * 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    // Create container for confetti particles
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    confettiContainer.style.position = 'absolute';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.opacity = '0';
    confettiContainer.style.transition = 'opacity 0.5s ease';
    
    // Create confetti particles
    const colors = ['#f39c12', '#e74c3c', '#9b59b6', '#3498db', '#16a085', '#2ecc71'];
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'confetti-particle';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = `${Math.random() * 100}%`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 6}s`;
        
        confettiContainer.appendChild(particle);
    }
    
    // Add confetti container to header
    const header = document.querySelector('header');
    if (header) {
        header.appendChild(confettiContainer);
        
        // Add hover event listeners
        header.addEventListener('mouseenter', function() {
            confettiContainer.style.opacity = '1';
        });
        
        header.addEventListener('mouseleave', function() {
            confettiContainer.style.opacity = '0';
        });
    }
});