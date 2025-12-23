const wrapper = document.querySelector('.wrapper');
const gif = document.querySelector('.gif');
const noBtn = document.querySelector('.no-btn');

noBtn.addEventListener('mouseover', () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + 'px';
  noBtn.style.top = randomY + 'px';
});
