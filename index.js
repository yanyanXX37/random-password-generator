
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols ){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+:>?"

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0){
        return '(Password Length must at least be 1)';
    }

    if ( allowedChars.length === 0){
        return '(At least one set of characters needs to be selected)';
    }    

    for (i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const generateBtn = document.getElementById("generateBtn");
const passwordResult = document.getElementById("passwordResult");
const lengthInput = document.getElementById("length");
const lowercaseBox = document.getElementById("lowercase");
const uppercaseBox = document.getElementById("uppercase");
const numbersBox = document.getElementById("numbers");
const symbolsBox = document.getElementById("symbols");



generateBtn.onclick = function() {
    const passwordLength = Number(lengthInput.value);
    const includeLower = lowercaseBox.checked;
    const includeUpper = uppercaseBox.checked;
    const includeNum = numbersBox.checked;
    const includeSym = symbolsBox.checked;

    const newPassword = generatePassword(
        passwordLength,
        includeLower,
        includeUpper,
        includeNum,
        includeSym
    );

    // Use 'passwordResult' consistently everywhere
    passwordResult.textContent = newPassword;

    if (newPassword.includes('(')) {
        passwordResult.className = "error";
    } else {
        passwordResult.className = "pass";
    }
};