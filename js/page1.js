const buttons = document.querySelectorAll('button');

function goToNextPage(event){
    window.location.href = "page2.html"
}
buttons.forEach(button => {
  button.addEventListener('click', goToNextPage)
});

window.onload = function() {
  if (performance.navigation.type === 1) { // Check if it's a page reload
      window.location.href = "./index.html"; 
  }
};