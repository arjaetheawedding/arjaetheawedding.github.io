// AOS Animation
AOS.init({ duration: 1200, once: true });

// COUNTDOWN
const countdownItems = document.querySelectorAll('.countdown-item .count');
const labels = ['Days','Hours','Minutes','Seconds'];
const weddingDate = new Date("2027-11-26T15:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {
    document.getElementById('countdown').innerHTML = "<div>We're Married!</div>";
    return;
  }

  const days = Math.floor(distance / (1000*60*60*24));
  const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((distance % (1000*60)) / 1000);

  const values = [days, hours, minutes, seconds];
  countdownItems.forEach((item, i) => item.textContent = values[i]);
}

setInterval(updateCountdown, 1000);
updateCountdown();

// FLOATING PARTICLES
const particlesContainer = document.querySelector('.particles');

for (let i = 0; i < 30; i++) {
  const particle = document.createElement('div');
  particle.style.left = Math.random() * 100 + 'vw';
  particle.style.animationDuration = 8 + Math.random() * 6 + 's';
  particle.style.width = 4 + Math.random() * 6 + 'px';
  particle.style.height = particle.style.width;
  particle.style.opacity = Math.random();
  particlesContainer.appendChild(particle);
}

// SCROLL PROGRESS
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / height) * 100;
  document.getElementById('progress-bar').style.width = scrolled + '%';
});

// LOADER
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => { loader.style.display = 'none'; }, 1000);
  }, 1500);
});

// MUSIC TOGGLE
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-toggle');

musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicBtn.innerHTML = '<i class="fa fa-music"></i>';
  } else {
    music.pause();
    musicBtn.innerHTML = '<i class="fa fa-volume-off"></i>';
  }
});

// VIDEO PLAY BUTTON WITH FADE + PULSE
const video = document.getElementById('wedding-video');
const playButton = document.getElementById('video-play-button');

function showPlayButton() {
  playButton.classList.remove('hidden');
}

function hidePlayButton() {
  playButton.classList.add('hidden');
}

playButton.addEventListener('click', () => {
  video.muted = false;
  video.play();
  hidePlayButton();
  video.setAttribute('controls', '');
});

video.addEventListener('pause', showPlayButton);
video.addEventListener('ended', showPlayButton);
video.addEventListener('play', hidePlayButton);

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;

    // toggle active arrow
    button.classList.toggle('active');

    if (answer.classList.contains('open')) {
      // close
      answer.style.maxHeight = null;
      answer.style.padding = "0 20px";
      answer.classList.remove('open');
    } else {
      // close all others first
      document.querySelectorAll('.faq-answer').forEach(a => {
        a.style.maxHeight = null;
        a.style.padding = "0 20px";
        a.classList.remove('open');
        a.previousElementSibling.classList.remove('active');
      });

      // open this
      answer.style.maxHeight = answer.scrollHeight + 30 + "px"; // extra padding
      answer.style.padding = "15px 20px";
      answer.classList.add('open');
    }
  });
});

// OPTIONAL: INTERSTITIAL IMAGE PARALLAX
window.addEventListener('scroll', () => {
  document.querySelectorAll('.interstitial-img').forEach(img => {
    const speed = 0.05;
    const offset = img.getBoundingClientRect().top;
    img.style.transform = `translateY(${offset * speed}px) scale(1.02)`;
  });
});