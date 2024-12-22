const buttons = document.querySelectorAll('button');

function goToNextPage(event){
    window.location.href = "page4.html"
}
buttons.forEach(button => {
  button.addEventListener('click', goToNextPage)
});

