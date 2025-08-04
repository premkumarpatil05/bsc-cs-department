const images = ["images/college.jpg", "images/college2.jpg"];
let current = 0;

function changeSlide(direction) {
  current = (current + direction + images.length) % images.length;
  document.getElementById("slide-img").src = images[current];
}

function updateTime() {
  const now = new Date();
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  document.getElementById("date-time").textContent = now.toLocaleString('en-IN', options);
}
setInterval(updateTime, 1000);
updateTime();

// Courses_____________________

document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
      const subjects = button.nextElementSibling;
      subjects.classList.toggle("hidden");
    });
  });
});

// ___________navbar____________________
const toggleBtn = document.getElementById('downloads-toggle');
const menu = document.getElementById('downloads-menu');

toggleBtn.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent page jump
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});


document.addEventListener('click', function (e) {
  if (!toggleBtn.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = 'none';
  }
});




// --------------lab-gallery--------------------

function openModal(src) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = src;
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}
