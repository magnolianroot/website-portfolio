


// Get the button:
const topFunction = document.getElementById("back-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// script.js
function closeAlert(button) {
  const alert = button.parentNode;
  alert.style.display = "none";
}
 

$('.alert').alert('close')
$('#myAlert').on('closed.bs.alert', function () {
  // do something…
})
$('myAlert').alert('dispose')

