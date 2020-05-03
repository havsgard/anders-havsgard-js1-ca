document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contactForm");

    form.addEventListener("submit", function (evt) {
        
        evt.preventDefault();

        let name = document.getElementById("name").value;

        document.querySelector("#name + .form-error").style.display = name.length > 0 ? "none" : "block";

        let answer = document.getElementById("answer").value;

        document.querySelector("#answer + .form-error").style.display = answer.length > 10 ? "none" : "block";

        let email = document.getElementById("email").value;
        let error = document.querySelectorAll("#email ~ .form-error");

        if (email.length > 0) {
            error[1].style.display = /\S+@\S+\.\S+/.test(email) ? "none" : "block";
            error[0].style.display = "none";
        }
        else {
            error[0].style.display = "block";
            error[1].style.display = "none";
        }

        let address = document.getElementById("address").value;

        document.querySelector("#address ~ .form-error").style.display = address.length > 15 ? "none" : "block";
    });
});