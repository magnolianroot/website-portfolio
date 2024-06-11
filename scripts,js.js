
 

$('.alert').alert('close')
$('#myAlert').on('closed.bs.alert', function () {
  // do something…
})
$('myAlert').alert('dispose')


function greet(name) {
  return "Hello, " + name + "!";
}
// integrate this function into site form + popup email list prompt
  


// $('#myModal').modal(options)
//alert modal



//back-to-top button trial - debug
let window = document;
window.onscroll = function () {
  let myBtn = document.getElementById("topFunction");

  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
      myBtn.style.display = "block";
  } else {
      myBtn.style.display = "none";
  }
};






function nextSlide() {
  $('myCarouel').carousel('next');

}


  document.querySelector('#navlink').disabled = true;

  let my=myBtn = document.getElementById("myBtn");

  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}

function myBtn() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//toggle theme button//
const themeStitcher = document.getElementById("themingSwitcher");
const isSystemThemeSetToDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// set toggler position based on system theme
if (isSystemThemeSetToDark) {
  themeStitcher.checked = true;
}

// add listener to theme toggler
themeStitcher.addEventListener("change", (e) => {
  toggleTheme(e.target.checked);
});

const toggleTheme = (isChecked) => {
  const theme = isChecked ? "dark" : "light";

  document.documentElement.dataset.mdbTheme = theme;
}

// add listener to toggle theme with Shift + D
document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.key === "D") {
    themeStitcher.checked = !themeStitcher.checked;
    toggleTheme(themeStitcher.checked);
  }
});
