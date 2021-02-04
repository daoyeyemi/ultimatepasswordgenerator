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
    const length = lengthElement.value;
})