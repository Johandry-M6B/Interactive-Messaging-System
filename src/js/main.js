 function validateAge() {
      const name = document.getElementById("name").value.trim();
      const ageText = document.getElementById("age").value.trim();
      const age = Number(ageText);

      const messageElement = document.getElementById("message");

      if (name === "") {
        messageElement.innerHTML = "<span style='color: red;'>Please enter your name.</span>";
        return;
      }

      if (isNaN(age) || ageText === "") {
        console.error("Error: Please enter a valid number for age.");
        messageElement.innerHTML = "<span style='color: red;'>Error: Please enter a valid number for age.</span>";
      } else if (age < 18) {
        const message = `Hi ${name}, you are underage. Keep learning and enjoying code!`;
        messageElement.innerText = message;
      } else {
        const message = `Hi ${name}, you are an adult. Get ready for big opportunities in the world of programming!`;
        messageElement.innerText = message;
      }
    }