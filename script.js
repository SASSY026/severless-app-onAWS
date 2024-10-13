const form = document.querySelector('form');
const greeting = document.querySelector('#greeting');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const name = document.querySelector('#name').value;
	greeting.textContent = `Hello, ${name}!`;
});

const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://cpjbmimolcxgrjueyhe4ya7eru0huvez.lambda-url.ap-south-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}
updateCounter();
