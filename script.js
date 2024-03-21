const setActive = (index) => {
  nav = document.getElementById("nav")
  for (var i = 0; i < nav.childNodes.length; i++) {
    var child = nav.childNodes[i]
    if (child.nodeType === 1) {child.className = ""}
  }
  nav.children[index].className = "active"
}

const goTo = (id,index) => {
  setOpen(index)
}

const setOpen = (index) => {
  content = document.getElementById("content")
  for (var i = 0; i < content.childNodes.length; i++) {
    var child = content.childNodes[i]
    if (child.nodeType === 1) {child.className = "page"}
  }
  content.children[index].className = "open"
}
  let slideIndex = 1;

  function plusSlides(n) {  
    showSlides(slideIndex += n);
  }

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slideactive", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " slideactive";
} 

document.onload = (() => {showSlides(1);})