// Function to load content into a specific element
function loadHTML(id, url) {
    fetch(url)
    .then(response => response.text())
    .then(data => {
    document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error('Error loading HTML:', error));
   }
   
   // Load the header, navigation, and footer
   loadHTML('header-placeholder', 'header.html');
   loadHTML('nav-placeholder', 'nav.html');
   loadHTML('footer-placeholder', 'footer.html');