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

//License Plate
const lSlides = document.getElementById("License-items");
const lRealCount = 4;
let lIndex = 0;

setInterval(() => {
  lIndex++;

  lSlides.style.transition = "transform 0.6s ease";
  lSlides.style.transform = `translateX(-${lIndex * 100}%)`;

  if (lIndex === lRealCount) {
    setTimeout(() => {
      lSlides.style.transition = "none";
      lIndex = 0;
      lSlides.style.transform = "translateX(0)";
    }, 500);
  }
}, 3000);

//TaskHive
const thSlides = document.getElementById("TaskHive-items");
const thRealCount = 4;
let thIndex = 0;

setInterval(() => {
  thIndex++;

  thSlides.style.transition = "transform 0.6s ease";
  thSlides.style.transform = `translateX(-${thIndex * 100}%)`;

  if (thIndex === thRealCount) {
    setTimeout(() => {
      thSlides.style.transition = "none";
      thIndex = 0;
      thSlides.style.transform = "translateX(0)";
    }, 500);
  }
}, 3000);

//PNUTS
const pSlides = document.getElementById("PNUTS-items");
const pRealCount = 4;
let pIndex = 0;

setInterval(() => {
  pIndex++;

  pSlides.style.transition = "transform 0.6s ease";
  pSlides.style.transform = `translateX(-${pIndex * 100}%)`;

  if (pIndex === pRealCount) {
    setTimeout(() => {
      pSlides.style.transition = "none";
      pIndex = 0;
      pSlides.style.transform = "translateX(0)";
    }, 500);
  }
}, 3000);

//JobSeekerPHP
const jsPhpSlides = document.getElementById("JobSeekerPHP-items");
const jsPhpRealCount = 5;
let jsPhpIndex = 0;

setInterval(() => {
  jsPhpIndex++;

  jsPhpSlides.style.transition = "transform 0.6s ease";
  jsPhpSlides.style.transform = `translateX(-${jsPhpIndex * 100}%)`;

  if (jsPhpIndex === jsPhpRealCount) {
    setTimeout(() => {
      jsPhpSlides.style.transition = "none";
      jsPhpIndex = 0;
      jsPhpSlides.style.transform = "translateX(0)";
    }, 500);
  }
}, 3000);