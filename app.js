document.addEventListener("DOMContentLoaded", () => {
    const birthdayInput = document.getElementById("birthday");
    const generateButton = document.getElementById("generate-calendar");
    const calendarDiv = document.querySelector(".calendar");
    const remainingDaysSpan = document.getElementById("remaining-days");

    const totalWeeks = 80 * 52; // 80 years * 52 weeks = 4160 weeks

    generateButton.addEventListener("click", () => {
        const birthday = new Date(birthdayInput.value);
        if (isNaN(birthday)) {
            alert("Please select a valid birthdate.");
            return;
        }

        generateMementoMoriCalendar(birthday);
    });

    function generateMementoMoriCalendar(birthday) {
        calendarDiv.innerHTML = ""; // Clear previous calendar

        const today = new Date();
        const birthTime = birthday.getTime();
        const currentTime = today.getTime();
        const weeksLived = Math.floor((currentTime - birthTime) / (1000 * 60 * 60 * 24 * 7));
        const weeksRemaining = Math.max(totalWeeks - weeksLived, 0);

        remainingDaysSpan.textContent = weeksRemaining * 7; // Convert weeks to days

        for (let i = 0; i < totalWeeks; i++) {
            const weekBox = document.createElement("div");
            weekBox.classList.add("week");

            if (i < weeksLived) {
                weekBox.classList.add("past");
            } else {
                weekBox.classList.add("future");
            }

            calendarDiv.appendChild(weekBox);
        }
    }
});
