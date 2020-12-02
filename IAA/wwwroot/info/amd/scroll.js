const bg = document.getElementById('header');
window.addEventListener('scroll', function(){
  bg.style.backgroudSize = 200 - +window.pageYOffset/20+'%';
  bg.style.opacity = 1 - +window.pageYOffset/1000+'';
  })

  alert('Добро пожаловать на наш информационный раздел.Сделайте прокрутку вниз для полной информаций');
