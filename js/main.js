

function activate(e) {
  const slider = document.querySelector('.slider');
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0]);
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}
 
document.addEventListener('click',activate,false);