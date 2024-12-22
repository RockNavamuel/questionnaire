const buttons = document.querySelectorAll('button');

function goToNextPage(event){
    window.location.href = "final-page.html"
}
buttons.forEach(button => {
  button.addEventListener('click', goToNextPage)
});

