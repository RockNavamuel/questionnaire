window.onload = function() {
    if (performance.navigation.type === 1) { // Check if it's a page reload
        window.location.href = "./home.html"; 
    }
};