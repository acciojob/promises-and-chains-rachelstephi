//your JS code here. If required.
const form = document.getElementById("form");
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const age = ageInput.value.trim();
    const name = nameInput.value.trim();

    // Validation
    if (age === "" || name === "") {
        alert("Please enter valid details.");
        return;
    }

    // Promise
    const votingPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Number(age) > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    });

    votingPromise
        .then((message) => {
            alert(message);
        })
        .catch((message) => {
            alert(message);
        });
});