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


// popper
const button = document.querySelector('#button');
const tooltip = document.querySelector('#tooltip');

const popperInstance = Popper.createPopper(button, tooltip, {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 7],
        placement: 'top',
      },
    },
  ],
});
                        
//   import { createPopper } from '@popperjs/core';

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


/*Twitter profile timeline */

twttr.widgets.createTimeline(
  {
    sourceType: "profile",
    screenName: "magnolianroot"
  },
  document.getElementById("container")
);








 

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
