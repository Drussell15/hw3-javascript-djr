// Assignment Code

var { upperCase_char_code, lowerCase_char_code, generateBtn } = newFunction();
const Symbol_char_codes = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(124, 126)
)
function newFunction() {
    var generateBtn = document.querySelector("#generate");
    const lowerCase_char_code = arrayFromLowToHigh(97, 122);
    const upperCase_char_code = arrayFromLowToHigh(65, 90);
    const Number_char_code = arrayFromLowToHigh(48, 57);
    return { upperCase_char_code, lowerCase_char_code, generateBtn };
}

//user prompts returns object with user responses if user says no to everything return nothing to later send alert message to user
function userPrompts() {
    var passwordLength = 0;
    do {
        passwordLength = prompt("pick a number between 8-128");
    } while (passwordLength < 8 || passwordLength > 128);
    //asks user to pick between 8-128 characters
    var numbers = "";
    do {
        numbers = prompt("Y or N"... do you want your password to include numbers ? "));
        while (numbers != "Y" && numbers != "N");
        //ask user if they want upper case
        var passwordUpper = "";
        do {
            passwordUpper = prompt("Y or N... Do you want your password toinclude Uppercase?");
        } while (passwordUpper != "Y" && passwordUpper != "N");
        //asks user if they want lower case
        var passwordLower = "";
        do {
            passwordLower = prompt("Y or N...do you want your password to include Lowercase?");
        } while (passwordLower != "Y && passwordLower !="N");
        //asks if user wants special characters
        var specialChar = "";
        do {
            specialChar = prompt("Y or N ...Do you want your password to include specialChar?");
        } while (specialChar != "Y" && specialChar != "N");
        if (numbers == "N" && passwordUpper == "N" && passwordLower == "N" && specialChar == "N") {
            return null
        } else {
            return {
                passwordLength: passwordLength,
                numbers: numbers,
                passwordUpper: passwordUpper,
                passwordLower: passwordLower,
                specialChar: specialChar
            }
        }
        //based on user responses this will generate password by creating an array of criteria to generate
        function generatePassword() {
            var passwordCriteria = userPrompts();
            console.log(passwordCriteria)
            if (passwordCriteria == null) {
                return "warning you must have at least one 'Y' click generate password again";
            } else {
                var asciiCodes = [];
                if (passwordCriteria.numbers == "Y") {
                    asciiCodes = asciiCodes.concat(number_char_code);
                }
                if (passwordCriteria.passwordUpper == "Y") {
                    asciiCodes = asciiCodes.concat(upperCase_char_code);
                }
                if (passwordCriteria.passwordLower == "Y") {
                    asciiCodes = asciiCodes.concat(lowerCase_char_code);
                }
                if (passwordCriteria.specialChar == "Y") {
                    asciiCodes = asciiCodes.concat(Symbol_char_codes);
                }
                const passwordCharacters = []
                for (let i = 0; < passwordCriteria.passwordLength; i++) {
                    const characterCode = asciiCodes[Math.floor(Math.random() * asciiCodes.length)];
                    passwordCharacters.push(String.fromCharCode(characterCode)))]
                }
                return passwordCharacters.join('')
            }
        }
        //write the password to the #password input or something
        function writePassword() {
            var password = generatePassword();
            var passwordText = document.querySelector("#password");
            passwordText.value = password;
        }


        // helpfunction to create arrays for ascii character groups
        function arrayFromLowToHigh(low, high) {
            const array = [];
            for (let i = low; i <= high; i++) {
                array.push(i);
            }
            return array;
        }
        // Add event listener to generate button
        generateBtn.addEventListener("click", writePassword);
