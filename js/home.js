const button = document.getElementById('button')

function goToNextPage(event){
    window.location.href = "page1.html"
}

button.addEventListener('click', goToNextPage)