//custom carousel

//JobSeeker
const jsSlides = document.getElementById("JobSeeker-items");
const jsRealCount = 5;
let jsIndex = 0;

setInterval(() => {
  jsIndex++;

  jsSlides.style.transition = "transform 0.6s ease";
  jsSlides.style.transform = `translateX(-${jsIndex * 100}%)`;

  if (jsIndex === jsRealCount) {
    setTimeout(() => {
      jsSlides.style.transition = "none";
      jsIndex = 0;
      jsSlides.style.transform = "translateX(0)";
    }, 500);
  }
}, 3000);

//HighRise
const hrSlides = document.getElementById("HighRise-items");
const hrRealCount = 4;
let hrIndex = 0;

setInterval(() => {
  hrIndex++;

  hrSlides.style.transition = "transform 0.6s ease";
  hrSlides.style.transform = `translateX(-${hrIndex * 100}%)`;

  if (hrIndex === hrRealCount) {
    setTimeout(() => {
      hrSlides.style.transition = "none";
      hrIndex = 0;
      hrSlides.style.transform = "translateX(0)";
    }, 500);
  }
}, 3000);