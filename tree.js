

document.addEventListener("DOMContentLoaded", function () {
  window.develop = false;
  
  setInterval(function () {
    document.getElementById("darth-vader-example").click();
  }, 3000);
  
  window.setTimeout(function () {
    if (window.develop) return;
    window.location.reload();
  }, 90000);

  var h = document.documentElement.clientHeight;
  var lowerBound = -2;
  var upperBound = 5;
  for (var ornament of document.getElementsByClassName("ornament")) {
    var margin = getRandomNumber(lowerBound, upperBound);
    ornament.style.marginTop = margin + "vh";
  }

loadParticles();
});

function getRandomNumber(start, end) {
  if (!start) start = 0;
  if (!end) end = 1;

  return Math.floor(Math.random() * end) + start;
}

function loadParticles(){
  new JParticles.snow('.particle-engine',{
    maxR: 3.5
  })

}

