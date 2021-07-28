//Скрипт для слайдера картинок
$('.single-item').slick({
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3600,
  infinite: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

//Скрипт для слайдера в таблице кредита
function sizeSum() {
  var rng = document.getElementById('size');
  var p = document.getElementById('sum');
p.innerHTML=rng.value;
}
function quantity(){
  var rng = document.getElementById('time');
  var p = document.getElementById('months');
  p.innerHTML = rng.value;
}

//Скрипт для расчета кредита
function monthPay(){
var sum = document.getElementById('sum');
var months = document.getElementById('months');
var month_pay = document.getElementById('month_pay');
month_pay.value = Math.ceil((sum.innerHTML * 0.01 * Math.pow(1 + 0.01, months.innerHTML)) / (Math.pow(1 + 0.01, months.innerHTML) - 1));
}
