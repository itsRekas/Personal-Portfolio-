// Variable to track if Home section is displayed
var homeon = true;

// Function to show the About section and hide the Home section
function mobileshowpage() {
    closeMenu(); // Close mobile menu if open
    const infoSection = document.getElementById("AboutPage");
    const HomeSection = document.getElementById("HomePage");
    HomeSection.style.display = "none"; // Hide Home section
    infoSection.style.display = "block"; // Show About section
    homeon = false; // Set homeon flag to false indicating About section is displayed
}

// Function to hide the About section and show the Home section
function mobilehidepage() {
    closeMenu2(); // Close mobile menu if open
    const infoSection = document.getElementById("AboutPage");
    const HomeSection = document.getElementById("HomePage");
    HomeSection.style.display = "block"; // Show Home section
    HomeSection.style.animationName = "uptodown"; // Apply animation
    HomeSection.style.animationDuration = "1s";
    infoSection.style.display = "none"; // Hide About section
    homeon = true; // Set homeon flag to true indicating Home section is displayed
}
// Function to show the About section and hide the Home section
function showpage() {
    const infoSection = document.getElementById("AboutPage");
    const HomeSection = document.getElementById("HomePage");
    HomeSection.style.display = "none"; // Hide Home section
    infoSection.style.display = "block"; // Show About section
    homeon = false; // Set homeon flag to false indicating About section is displayed
}

// Function to hide the About section and show the Home section
function hidepage() {
    const infoSection = document.getElementById("AboutPage");
    const HomeSection = document.getElementById("HomePage");
    HomeSection.style.display = "block"; // Show Home section
    HomeSection.style.animationName = "uptodown"; // Apply animation
    HomeSection.style.animationDuration = "1s";
    infoSection.style.display = "none"; // Hide About section
    homeon = true; // Set homeon flag to true indicating Home section is displayed
}
// Function to create typing effect in the introduction section
function typingeffect() {
    const typingInfo = document.querySelector(".you");
    const info = [
        "But, hey! You can just call me Rekas",
        "Welcome to my website",
        "You can nevermind",
        "You can contact from any icon below",
    ];

    // Function to type text character by character
    function typeWriter(element, text, i = 0) {
        if (i === 0) {
            element.textContent = "";
        }
        if (i === text.length) return;
        element.textContent += text[i];
        setTimeout(() => typeWriter(element, text, ++i), 50);
    }

    // Function to delete typed text character by character
    function typeDelete(element, text, i = text.length - 1) {
        element.textContent = text.slice(0, i);
        if (i === 0) return;
        setTimeout(() => typeDelete(element, text, --i), 50);
    }

    // Function to start the animation cycle of typing and deleting
    function startAnimationCycle() {
        for (let j = 0; j < info.length; j++) {
            setTimeout(() => typeWriter(typingInfo, info[j]), j * 6000); // Type text
            setTimeout(() => typeDelete(typingInfo, info[j]), j * 6000 + 3000); // Delete text
        }
    }

    startAnimationCycle(); // Start the initial animation cycle

    setInterval(startAnimationCycle, 25000); // Set interval for continuous animation cycles
}

// Function to show the mobile menu
function showMenu() {
    const nav = document.querySelector(".mobilenav");
    const menubutton = document.querySelector('.Menu');
    const close = document.querySelector('.Close');
    nav.style.display = 'block'; // Display mobile navigation
    menubutton.style.display = 'none'; // Hide menu button
    close.style.display = "block"; // Display close button
}

// Function to close the mobile menu
function closeMenu() {
    const nav = document.querySelector(".mobilenav");
    const menubutton = document.querySelector('.Menu');
    const close = document.querySelector('.Close');
    nav.style.display = 'none'; // Hide mobile navigation
    menubutton.style.display = 'block'; // Display menu button
    close.style.display = "none"; // Hide close button
}

// Function to show the mobile menu version 2
function showMenu2() {
    const nav = document.querySelector(".mobilenav2");
    const menubutton = document.querySelector('.Menu2');
    const close = document.querySelector('.Close2');
    nav.style.display = 'block'; // Display mobile navigation
    menubutton.style.display = 'none'; // Hide menu button
    close.style.display = "block"; // Display close button
}

// Function to close the mobile menu version 2
function closeMenu2() {
    const nav = document.querySelector(".mobilenav2");
    const menubutton = document.querySelector('.Menu2');
    const close = document.querySelector('.Close2');
    nav.style.display = 'none'; // Hide mobile navigation
    menubutton.style.display = 'block'; // Display menu button
    close.style.display = "none"; // Hide close button
}

// Function to check and adjust navigation buttons visibility based on window width
function checker() {
    const navbuttons = document.querySelector(".navButtons");
    const menubutton = document.querySelector('.Menu');
    const close = document.querySelector('.Close');
    if (window.innerWidth > 1024) {
        navbuttons.style.display = 'block'; // Display navigation buttons
        menubutton.style.display = 'none'; // Hide menu button
        close.style.display = "none"; // Hide close button
    } else {
        navbuttons.style.display = 'none'; // Hide navigation buttons
        menubutton.style.display = 'block'; // Display menu button
        close.style.display = "none"; // Hide close button
    }
}

checker(); // Initial check on page load
window.addEventListener('resize', function () {
    checker(); // Check on window resize
});

setTimeout(typingeffect, 3000); // Start typing effect after 3 seconds of page load

// IntersectionObserver to animate elements on left and right
const observerleft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showleft'); // Add class to show element
        } else {
            entry.target.classList.remove('showleft'); // Remove class to hide element
        }
    });
});

const observerright = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showright'); // Add class to show element
        } else {
            entry.target.classList.remove('showright'); // Remove class to hide element
        }
    });
});

// IntersectionObserver to fill progress bars
const fillbar = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fill'); // Add class to fill progress bar
        } else {
            entry.target.classList.remove('fill'); // Remove class to reset progress bar
        }
    });
});

// Observing elements to add animation classes
const hiddenme2 = document.querySelectorAll('.Me2');
hiddenme2.forEach((el) => observerright.observe(el));
const hiddenme3 = document.querySelectorAll('.Me3');
hiddenme3.forEach((el) => observerright.observe(el));
const hiddenme4 = document.querySelectorAll('.Me4');
hiddenme4.forEach((el) => observerright.observe(el));
const hiddenme5 = document.querySelectorAll('.Me5');
hiddenme5.forEach((el) => observerright.observe(el));

// Observing elements to fill progress bars
const progressfill = document.querySelectorAll('.skill-per');
progressfill.forEach((el) => fillbar.observe(el));

// Function to show download element
function showdownload() {
    const downloadElement = document.getElementById('download'); // Assuming 'download' is the id of the element to show
    if (downloadElement) {
        downloadElement.style.display = 'block'; // Display download element
    }
}

// Function to hide download element
function hidedownload() {
    const downloadElement = document.getElementById('download'); // Assuming 'download' is the id of the element to hide
    if (downloadElement) {
        downloadElement.style.display = 'none'; // Hide download element
    }
}

// IntersectionObserver to show/hide download element based on visibility
const pullam = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            showdownload(); // Show download element when target element is visible
        } else {
            hidedownload(); // Hide download element when target element is not visible
        }
    });
});

// Assuming you have an element with an id of 'timeline-container' to observe
const targetElement = document.getElementById('timeline-container');
if (targetElement) {
    pullam.observe(targetElement); // Start observing target element for visibility changes
}
