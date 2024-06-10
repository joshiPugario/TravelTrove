document.getElementById("myForm").onsubmit = function() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://script.google.com/macros/s/AKfycbxyZUD8gNY5NnJgkzoMDOY27zzzUZ2AYG7r9cfpAMzInvzKJz0VY1ymYgQMBJZE4e9A/exec", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    var formData = new FormData(document.getElementById("myForm"));
    var params = new URLSearchParams();
    formData.forEach(function(value, key) {
      params.append(key, value);
    });

    xhr.send(params.toString());
    alert("Message sent. Thank you for your message!");
    return false; // Prevent the default form submission
  };

const hamIcon = document.querySelector('.ham--icon');
const hamMenu = document.querySelector('.ham-menu');
const hamExit = document.querySelector('.ham-exit');

hamIcon.addEventListener('click', function () {
  hamMenu.classList.toggle('active');
  hamIcon.style.display = 'none';
}); 

hamExit.addEventListener('click', function () {
  hamMenu.classList.toggle('active');
  hamIcon.style.display = 'block';
});

