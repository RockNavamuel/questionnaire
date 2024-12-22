const buttons = document.querySelectorAll('button');

function goToNextPage(event){
    window.location.href = "final-question.html"
}
buttons.forEach(button => {
  button.addEventListener('click', goToNextPage)
});

