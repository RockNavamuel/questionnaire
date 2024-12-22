const buttons = document.querySelectorAll('button');

function goToNextPage(event){
    window.location.href = "page3.html"
}
buttons.forEach(button => {
  button.addEventListener('click', goToNextPage)
});

