//back-to-top button 
let window = document;
window.onscroll = function () {
  let topBtn = document.getElementById("topFunction");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topBtn.style.display = "block";
  } else {
      topBtn.style.display = "none";
  }
};



 

$('.alert').alert('close')
$('#myAlert').on('closed.bs.alert', function () {
  // do something…
})
$('myAlert').alert('dispose')



// $('#myModal').modal(options)
//alert modal

console.log('Hello from script.js!');




function greet(name) {
  return "Hello, " + name + "!";
}
// integrate this function into site form


// $('#myModal').modal(options)
//alert modal



function nextSlide() {
  $('myCarouel').carousel('next');

}

//scroll function
window.addEventListener('scroll', function() {
  document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
});


