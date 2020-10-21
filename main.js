$('.fq a').on('click', (e) => {
  e.preventDefault();
  console.log("開閉完了");

const value = $(e.target).closest('.fqa').find('.f-a');

if(value.hasClass('active')) {
  value.removeClass('active');
  value.slideUp();
  $(e.target).next().html('<p><i class="fas fa-angle-down"></i></p>')
} else {
  value.addClass('active');
  value.slideDown();
  const point = $(e.target).next().html('<p><i class="fas fa-angle-up"></i></p>');
  console.log(point);

}

})
