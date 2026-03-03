// AOS Animation
AOS.init({ duration: 1200, once: true });

// COUNTDOWN
const countdown = document.getElementById('countdown');

// Set your wedding date and time (November 26, 2027 at 3:00 PM)
const weddingDate = new Date("2027-11-26T15:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime(); // current time
  const distance = weddingDate - now; // time difference in milliseconds

  if (distance <= 0) {
    countdown.innerHTML = "We're Married!";
    return;
  }

  // Calculate time components
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display countdown
  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

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
    document.getElementById('loader').style.opacity = '0';
    setTimeout(() => { document.getElementById('loader').style.display = 'none'; }, 1000);
  }, 1500);
});

// MUSIC TOGGLE (optional, no autoplay)
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-toggle');

musicBtn.addEventListener('click', () => {
  if(music.paused) {
    music.play();
    musicBtn.innerHTML = '<i class="fa fa-music"></i>'; // icon stays
  } else {
    music.pause();
    musicBtn.innerHTML = '<i class="fa fa-volume-off"></i>';
  }
});
const video = document.getElementById('wedding-video');
const playButton = document.getElementById('video-play-button');

playButton.addEventListener('click', () => {
  video.muted = false; // unmute if you want sound
  video.play();         // start video
  playButton.style.display = 'none'; // hide button
  video.setAttribute('controls', ''); // show native controls
});
// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const answer = item.querySelector('.faq-answer');
    if(answer.style.maxHeight){
      answer.style.maxHeight = null;
      answer.style.padding = "0 25px";
    } else {
      // close all other open items
      faqItems.forEach(i => {
        i.querySelector('.faq-answer').style.maxHeight = null;
        i.querySelector('.faq-answer').style.padding = "0 25px";
      });
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.padding = "15px 25px";
    }
  });
});