
 

$('.alert').alert('close')
$('#myAlert').on('closed.bs.alert', function () {
  // do something…
})
$('myAlert').alert('dispose')


function greet(name) {
  return "Hello, " + name + "!";
}
// integrate this function into site form


// $('#myModal').modal(options)
//alert modal






//back-to-top button trial - debug
let window = document;
window.onscroll = function () {
  let topFunction = document.getElementById("topFunction");

  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
      topFunction.style.display = "block";
  } else {
      topFunction.style.display = "none";
  }
};



function nextSlide() {
  $('myCarouel').carousel('next');

}
