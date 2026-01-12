const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

// Selecting elements
const password1El = document.getElementById("password1")
const password2El = document.getElementById("password2")
const btnEl = document.getElementById("generate-password")
const passwordSliderEl = document.getElementById("password-length-slider")
const passwordLengthEl = document.getElementById("password-length")
const option1El = document.getElementById("option1")
const option2El = document.getElementById("option2")
const option3El = document.getElementById("option3")

// Choose password length
let passwordLength = 7;

// Function to generate random character
function generateRandomChar() {

    const randomNum = Math.floor(Math.random() * characters.length)

    if (option1El.checked === true) {
        const charactersNum = characters.filter(i => {
            return i > 0
        })
        return charactersNum[Math.floor(Math.random() * charactersNum.length)]
    }

    else if (option2El.checked === true) {
        return characters[Math.floor(Math.random() * 52)]
    }

    else if (option3El.checked === true) {
        return characters[randomNum]
    }

    else {
        return characters[randomNum]
    }

}


// Display password length
passwordSliderEl.addEventListener("input", function (e) {
    passwordLengthEl.innerText = e.target.value;
    passwordLength = e.target.value;
}

)





// Function to generate two random passwords
function generateRandomPasswords() {

    let randomPassword1 = '';
    let randomPassword2 = '';

    for (let i = 0; i < passwordLength; i++) {
        randomPassword1 += generateRandomChar();
    }

    for (let i = 0; i < passwordLength; i++) {
        randomPassword2 += generateRandomChar();
    }

    password1El.textContent = randomPassword1;
    password2El.textContent = randomPassword2;
}

// Click Event listener on Button to generate passwords
btnEl.addEventListener("click", function () {
    generateRandomPasswords()

})

// Click to copy passwords
password1El.addEventListener("click", function (e) {

    navigator.clipboard.writeText(password1El.innerText)
        .then(alert("Password Copied"))

}

)
password2El.addEventListener("click", function (e) {

    navigator.clipboard.writeText(password2El.innerText)
        .then(alert("Password Copied"))

}
)

