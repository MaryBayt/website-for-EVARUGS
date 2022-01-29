const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,
    speed: 400,
    spaceBetween: 70,
    centeredSlides: true,
    slideToClickedSlide: true,
    toggle: true,
  });
  const windowModal=document.querySelector('.modal');
  const buttonModal=document.querySelector('.main_display-button');

  buttonModal.addEventListener('click', () => {
      windowModal.classList.add('active');
  });
/*
  windowModal.addEventListener('click',() => {
    const target = document.querySelector('.close');
    if(target.classList.contains('close')) {
        windowModal.classList.remove('active');
    }
  }); */

  windowModal.addEventListener('click',(e) => {
    const isModal = e.target.closest('.modal_inner');
    if(!isModal) {
    windowModal.classList.remove('active');
    }
  });