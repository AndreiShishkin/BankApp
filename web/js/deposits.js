//Скрипт для слайдера в таблице вклады
function sizeSum1() {
  var rng = document.getElementById('size1');
  var p = document.getElementById('sum1');
p.innerHTML=rng.value;
}
function quantity1(){
  var rng = document.getElementById('time1');
  var p = document.getElementById('months1');
  var z = document.getElementById('time1');
    var r = document.getElementById('rate');
  p.innerHTML = rng.value;
  var i = 3.4;
  while(p.innerHTML = z.value){
  r.innerHTML = i;
  i += 0.2;
  break;
}
}

function calculate(){
  var rng = document.getElementById('size1');
  var sum = document.getElementById('sum1')
  var p = document.getElementById('time1');
  var earning = document.getElementById('earning');
  var revenue = document.getElementById('revenue')
  earning.innerHTML = Math.round((size1.value * 3.4 * (time1.value * 30 / 365)) / 100, 1);
  revenue.innerHTML = parseInt (sum.innerHTML, 10) + parseInt(earning.innerHTML, 10);
}
