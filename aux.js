const init = function(e) {
    let wo = document.querySelector("#meaning");
    wo.innerHTML = localStorage.getItem("refer");
};

document.addEventListener('DOMContentLoaded', function() { init(); });