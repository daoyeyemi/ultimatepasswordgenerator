const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('length');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const generateElement = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

const randomFunction = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}
// added functionality so that when clipboard is clicked
clipboard.addEventListener("click", () => {
    // creating new div for textspace
    const textspace = document.createElement("textspace");
    // password will be equal to the inner text of the resultElement
    const password = resultElement.innerText;
    // if password doesn't exist, return nothing
    if (!password) {
        return
    }
    // value of the textspace is equal to the password
    textspace.value = password;
    // add textspace div to the body of the document
    document.body.appendChild(textspace);
    // select and copy value in textspace 
    textspace.select();
    document.execCommand("copy");
    // remove value in the textspace 
    textspace.remove();
    // alert the following message
    alert("Password copied to clipboard")
})

// added functionality so that when clipboard is clicked
generateElement.addEventListener("click", () => {
    // + plus sign makes lengthElement value an actual number
    const length = +lengthElement.value;
    const hasLower = lowercaseElement.checked;
    const hasUpper = uppercaseElement.checked;
	const hasNumber = numbersElement.checked;
	const hasSymbol = symbolsElement.checked;
    
    resultElement.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword (lower, upper, number, symbol, length) {
    let generatedPassword = "";
    
    const typesCount = lower + upper + number + symbol;
    // filter out unchecked types
    console.log(typesCount)
    // creates new array that filters out unchecked items
    const typesArr = [
        {lower}, {upper}, {number}, {symbol}
    ]
         .filter(item => Object.values(item)[0]);
    console.log(typesArr)
    // doesn't have a selected type
    if (typesCount === 0) {
        return ""
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            console.log(funcName);
            // generatedPassword += randomFunction[funcName]();
            // console.log(generatedPassword);
        })
    }
    // const finPassword = generatedPassword.slice(0, length)

    // return finPassword
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}
