const hamIcon = document.querySelector('.ham--icon');
const hamMenu = document.querySelector('.ham-menu');
const hamExit = document.querySelector('.ham-exit');

hamIcon.addEventListener('click', function () {
  hamMenu.classList.toggle('active');
  hamIcon.style.display = 'none';
}); 

hamExit.addEventListener('click', function () {
  hamMenu.classList.toggle('active');
  hamIcon.style.display = 'block';
});