const init = function(e) {
    let input = document.querySelector("#demo");
    input.innerHTML = localStorage.getItem("demi");
    let output = document.querySelector("#meaning");
    output.innerHTML = localStorage.getItem("refer");
};

document.addEventListener('DOMContentLoaded', function() { init(); });