
// 🟢 Toggle Mobile Menu (For Hamburger Icon)
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// 🟢 Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Smoothly scroll to the target section
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust offset if needed
                behavior: 'smooth'
            });
        }
    });
});

// 🟢 Thumbnail Filtering Logic
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-btn"); // Select all category buttons
    const thumbnails = document.querySelectorAll(".thumbnail"); // Select all thumbnails

    // 🔹 Initially show only the first 8 thumbnails for "mixed" category
    showThumbnails("mixed");

    // 🔹 Add click event listener to all filter buttons
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category"); // Get selected category

            // 🔹 Remove active class from all buttons and set active class to clicked button
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // 🔹 Show thumbnails based on selected category
            showThumbnails(category);
        });
    });

    // 🟢 Function to Show/Hide Thumbnails Based on Category
    function showThumbnails(category) {
        let count = 0; // Counter to track first 8 thumbnails in "mixed"

        thumbnails.forEach(thumbnail => {
            if (category === "mixed") {
                // 🔹 Show only first 8 thumbnails for "mixed"
                if (count < 8) {
                    thumbnail.style.display = "block";
                    count++; // Increase count
                } else {
                    thumbnail.style.display = "none";
                }
            } else {
                // 🔹 Show thumbnails that match the selected category
                thumbnail.style.display = thumbnail.classList.contains(category) ? "block" : "none";
            }
        });
    }
});

// FAQ

document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector(".icon");

            // Close all other answers
            document.querySelectorAll(".faq-answer").forEach(item => {
                if (item !== answer) item.style.display = "none";
            });

            document.querySelectorAll(".icon").forEach(item => {
                if (item !== icon) item.textContent = "+";
            });

            // Toggle the selected answer
            if (answer.style.display === "block") {
                answer.style.display = "none";
                icon.textContent = "+";
            } else {
                answer.style.display = "block";
                icon.textContent = "-";
            }
        });
    });
});
