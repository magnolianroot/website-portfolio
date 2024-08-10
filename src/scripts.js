

import { Input, Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Input, Ripple });

// Initialization for ES Users
import { Input, initMDB } from "mdb-ui-kit";

initMDB({ Input });


// cursor effetc make
document.getElementById("demo").style.cursor = "pointer";


/*site theme + alert func*/

const sass = require('sass');

const result = sass.compile(scssFilename);


//alert
  function alertbox(){  
   alert("the skills are in the name");  
  }  
  <input type="button" value="click" onclick="alertbox()"/>  



alert("welcome to: home portal");  // alert func / fixed

// live alert
 const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}


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





//scroll function
window.addEventListener('scroll', function(){
  this.document.getElementById('showScroll').innerHTML = '';
  
})

function show() {
  tooltip.setAttribute('data-show', '');

  // We need to tell Popper to update the tooltip position
  // after we show the tooltip, otherwise it will be incorrect
  popperInstance.update();
}

function hide() {
  tooltip.removeAttribute('data-show');
}

const showEvents = ['mouseenter', 'focus'];
const hideEvents = ['mouseleave', 'blur'];

showEvents.forEach((event) => {
  button.addEventListener(event, show);
});

hideEvents.forEach((event) => {
  button.addEventListener(event, hide);
});

function show() {
  // Make the tooltip visible
  tooltip.setAttribute('data-show', '');

  // Enable the event listeners
  popperInstance.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: 'eventListeners', enabled: true },
    ],
  }));

  // Update its position
  popperInstance.update();
}

function hide() {
  // Hide the tooltip
  tooltip.removeAttribute('data-show');

  // Disable the event listeners
  popperInstance.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: 'eventListeners', enabled: false },
    ],
  }));
}
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function show() {
  tooltip.setAttribute('data-show', '');
  popperInstance.update();
}

function hide() {
  tooltip.removeAttribute('data-show');
}

const showEvents = ['mouseenter', 'focus'];
const hideEvents = ['mouseleave', 'blur'];

showEvents.forEach((event) => {
  button.addEventListener(event, show);
});


hideEvents.forEach((event) => {
  button.addEventListener(event, hide);
});


$('.alert').alert('close')
$('#myAlert').on('closed.bs.alert', function () {
  // do something…
})
$('myAlert').alert('dispose')



// $('#myModal').modal(options)
//alert modal


//fix
alertbox.render({
  alertIcon: 'success',
  title: 'Thank You!',
  message: 'AlertBox Popup Message',
  btnTitle: 'Ok',
  themeColor: '#000000',
  btnColor: '#7CFC00',
  btnColor: true
});



function greet(name) {
  return "Hello, " + name + "!";
}
// integrate this function into site form


//scroll function
window.addEventListener('scroll', function() {
  document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
});



/*Twitter profile timeline */

twttr.widgets.createTimeline(
  {
    sourceType: "profile",
    screenName: "magnolianroot"
  },
  document.getElementById("container")
);


/*navbar togglr */
  const toggleMenu = document.querySelector(".toggle-menu");
const navTop = document.querySelector(".nav-top");
toggleMenu.addEventListener("click", () => {
  navTop.classList.toggle("is-active");
});


