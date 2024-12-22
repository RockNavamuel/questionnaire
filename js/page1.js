const buttons = document.querySelectorAll('button');

function goToNextPage(event){
    window.location.href = "page2.html"
}
buttons.forEach(button => {
  button.addEventListener('click', goToNextPage)
});

