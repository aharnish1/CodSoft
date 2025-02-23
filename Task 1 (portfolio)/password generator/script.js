const lengthSlider = document.getElementById("lengthSlider");
        const lengthNumber = document.getElementById("lengthNumber");
        const passwordDisplay = document.getElementById("passwordDisplay");

        function updateLength() {
            lengthNumber.textContent = lengthSlider.value;
        }

        function generatePassword() {
            const length = lengthSlider.value;
            const includeUppercase = document.getElementById("uppercase").checked;
            const includeLowercase = document.getElementById("lowercase").checked;
            const includeNumbers = document.getElementById("numbers").checked;
            const includeSymbols = document.getElementById("symbols").checked;

            const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
            const numbers = "0123456789";
            const symbols = "!@#$%^&*()_+{}[]<>?/";

            let allowedChars = "";
            if (includeUppercase) allowedChars += upperCaseLetters;
            if (includeLowercase) allowedChars += lowerCaseLetters;
            if (includeNumbers) allowedChars += numbers;
            if (includeSymbols) allowedChars += symbols;

            if (allowedChars.length === 0) {
                passwordDisplay.value = "Select at least one option!";
                return;
            }

            let password = "";
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * allowedChars.length);
                password += allowedChars[randomIndex];
            }
            passwordDisplay.value = password;
        }

        function copyPassword() {
            passwordDisplay.select();
            document.execCommand("copy");
            alert("Password copied to clipboard!");
        }