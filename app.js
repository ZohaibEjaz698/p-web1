const elements = document.querySelectorAll('.ally');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: .4
}
const callbacks = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
}
let observer = new IntersectionObserver(callbacks, options);
elements.forEach(element => {
  observer.observe(element);
});
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const mainMenu = document.querySelector('.mainMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
function show(){
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}
function close(){
  mainMenu.style.top = '-100%';
}
const price = document.querySelector('.price');
if(screen.width <=768){
  price.classList.remove('ally');
}