let email = document.getElementById("email")
let newsletter = document.getElementById("newsletter")
let message = document.getElementById("message")


function subscribe () {
    console.log(email.value);
    message.classList.add("active");
    newsletter.classList.add("hide");
};

function back() {
    message.classList.remove("active");
    newsletter.classList.remove("hide");
}