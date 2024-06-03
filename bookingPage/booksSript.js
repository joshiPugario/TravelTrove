document.getElementById("myForm").onsubmit = function() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://script.google.com/macros/s/AKfycbyOUPIkX_Lk1g5RQu1h6RyTA9-qMJjvHpd57lM14kMv06_uACRqLoOdUN6ZnM8ufb5RFg/exec", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    var formData = new FormData(document.getElementById("myForm"));
    var params = new URLSearchParams();
    formData.forEach(function(value, key) {
      params.append(key, value);
    });

    xhr.send(params.toString());
    alert("Booking Success! An email will be sent to you in a few minutes confirming your booking. Thank you for trusting TravelTrove, Enjoy your wonderful vacation!");
    return false; // Prevent the default form submission
  };