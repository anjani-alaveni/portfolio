// ============================
// DARK MODE
// ============================

let themeBtn = document.getElementById("themebtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");
            themeBtn.innerHTML = "☀️ Light Mode";

        } else {

            localStorage.setItem("theme", "light");
            themeBtn.innerHTML = "🌙 Dark Mode";

        }

    });

}

// ============================
// TYPING EFFECT
// ============================

let typing = document.getElementById("typing");

if (typing) {

    let text = "Python Developer";
    let i = 0;

    function typingEffect() {

        if (i < text.length) {

            typing.innerHTML += text.charAt(i);
            i++;

            setTimeout(typingEffect, 100);
        }
    }

    typingEffect();
}





// ============================
// MOBILE MENU
// ============================

let menuBtn = document.getElementById("menuBtn");
let navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("show");

    });

}



// ============================
// ACTIVE NAVIGATION
// ============================

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav a");

if (sections.length > 0 && navLinks.length > 0) {

    window.addEventListener("scroll", function () {

        let current = "";

        sections.forEach(function (section) {

            let sectionTop = section.offsetTop;

            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    });

}


// ============================
// CONTACT FORM
// ============================

let contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {



        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let subject = document.getElementById("subject").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || subject === "" || message === "") {

            alert("Please fill all the fields.");

        }

        else (!email.includes("@") || !email.includes("."));{

            alert("Please enter a valid email address.");

        }

    });

}
// ============================
// PROJECT FILTER
// ============================

let filterButtons = document.querySelectorAll(".filter-btn");
let projectCards = document.querySelectorAll(".project-card");

if (filterButtons.length > 0) {

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            let selectedCategory =
                button.getAttribute("data-category");

            projectCards.forEach(function (card) {

                let cardCategory =
                    card.getAttribute("data-category");

                if (
                    selectedCategory === "all" ||
                    selectedCategory === cardCategory
                ) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

        });

    });

}