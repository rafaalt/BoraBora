const noButton = document.getElementById('noButton');
const dayContainer = document.getElementsByClassName('day-container')[0];

noButton.addEventListener('mouseover', () => {
    noButton.style.position = 'absolute'
    document.getElementById('image').style.display = 'flex';
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

noButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the button from being clicked
});

function clickYes() {
    showDayContainer()
}

function clickDay(day) {
    sendMail(day)
}

function showDayContainer() {
    dayContainer.style.display = 'flex';
}

function sendMail(message) {
    const formData = new FormData();
    formData.append("email", "laiza@email.com");
    formData.append("message", `Está marcado! Confirmado ${message}`);
    
    fetch("https://formsubmit.co/ajax/rafaaslat@gmail.com", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => alert(`Tá marcado ${message}`))
    .catch(error => alert("Erro ao enviar e-mail"));
}