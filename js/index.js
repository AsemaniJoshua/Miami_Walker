// Adding Event listener to humbeger menu
const menu = document.getElementById('menu');
const MobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close');

menu.addEventListener('click', () => {
  MobileMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  MobileMenu.style.display = 'none';
});

document.addEventListener('click', (e) => {
    if (e.target.id !== 'menu' && e.target.id !== 'mobile-menu' && e.target.id !== 'close') {
        MobileMenu.style.display = 'none';
    }
});

// Script to control number counter
// counter 1
function animateCounter1(target, duration) {
  const element = document.getElementById('counter1');
  let start = 0;
  const end = parseInt(target);
  const increment = end / (duration / 16);
  
  function updateCounter() {
      start += increment;
      element.innerText = Math.round(start);

      if (start < end) {
          requestAnimationFrame(updateCounter);
      } else {
          element.innerText = "12k+";
      }
  }

  requestAnimationFrame(updateCounter);
}

// Customize the target number and duration (in milliseconds)
document.addEventListener('DOMContentLoaded', function() {
  animateCounter1(12000, 5000); // 12000 is the target number, 2000 is the duration in milliseconds
});


// counter 2
function animateCounter2(target, duration) {
  const element = document.getElementById('counter2');
  let start = 0;
  const end = parseInt(target);
  const increment = end / (duration / 16);
  
  function updateCounter() {
      start += increment;
      element.innerText = Math.round(start);

      if (start < end) {
          requestAnimationFrame(updateCounter);
      } else {
          element.innerText = "7k+";
      }
  }

  requestAnimationFrame(updateCounter);
}

// Customize the target number and duration (in milliseconds)
document.addEventListener('DOMContentLoaded', function() {
  animateCounter2(7000, 5000); // 12000 is the target number, 2000 is the duration in milliseconds
});

// counter 3
function animateCounter3(target, duration) {
  const element = document.getElementById('counter3');
  let start = 0;
  const end = parseInt(target);
  const increment = end / (duration / 16);
  
  function updateCounter() {
      start += increment;
      element.innerText = Math.round(start);

      if (start < end) {
          requestAnimationFrame(updateCounter);
      } else {
          element.innerText = "10k+";
      }
  }

  requestAnimationFrame(updateCounter);
}

// Customize the target number and duration (in milliseconds)
document.addEventListener('DOMContentLoaded', function() {
  animateCounter3(10000, 5000); // 12000 is the target number, 2000 is the duration in milliseconds
});

// counter 4
function animateCounter4(target, duration) {
  const element = document.getElementById('counter4');
  let start = 0;
  const end = parseInt(target);
  const increment = end / (duration / 16);
  
  function updateCounter() {
      start += increment;
      element.innerText = Math.round(start);

      if (start < end) {
          requestAnimationFrame(updateCounter);
      } else {
          element.innerText = "270+";
      }
  }

  requestAnimationFrame(updateCounter);
}

// Customize the target number and duration (in milliseconds)
document.addEventListener('DOMContentLoaded', function() {
  animateCounter4(270, 4000); // 12000 is the target number, 2000 is the duration in milliseconds
});