const birthdayInput = document.getElementById("birthday");
const generateButton = document.getElementById("generate-calendar");
const calendarDiv = document.querySelector(".calendar");
const remainingDaysSpan = document.getElementById("remaining-day");

function calculateWeeks(birthday) {
    calendarDiv.innerHTML = "";


    const today = new Date();//today's date
    const birthTime = birthday.getTime();//convert birthday to milliseconds
    const currentTime = today.getTime();//convert current date
    const weeksLived = Math.floor((currentTime - birthTime) / (1000 * 60 * 60 * 24 * 7));
    const totalWeeks = 80 * 52;// assuming a person lives to be 80 years old
    const weeksRemaining = Math.max(totalWeeks - weeksLived, 0);

    for (let i = 0; i < totalWeeks; i++) {
        const weekBox = document.createElement("div");

        if (i < weeksLived) {
            weekBox.classList.add("past");
            weekBox.classList.add("cross");
            weekBox.textContent = "❌";
        } else {
            weekBox.classList.add("future");
            weekBox.textContent = "✔️";
        }

        calendarDiv.appendChild(weekBox);
    }

    remainingDaysSpan.textContent = weeksRemaining * 7; // To display days remaining

    return { weeksLived, weeksRemaining };

}

generateButton.addEventListener("click", () => {
    const birthday = new Date(birthdayInput.value);
    const birthdayValue = birthdayInput.value;
    console.log("Selected birthday:", birthdayValue)

    if (!birthdayInput.value) {
        alert("Please select a valid birthdate");
        return;
    }

    const { weeksLived, weeksRemaining } = calculateWeeks(birthday);
    console.log("Weeks Lived", weeksLived);
    console.log("Weeks remaining", weeksRemaining)

})