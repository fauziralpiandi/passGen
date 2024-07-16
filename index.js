const crypto = require("crypto");

const generatePassword = (
	length = 16,
	hasNumbers = true,
	hasLetters = true,
	hasSymbols = true,
) => {
	const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const numbers = "0123456789";
	const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

	let characters = "";
	if (hasLetters) {
		characters += alpha;
	}
	if (hasNumbers) {
		characters += numbers;
	}
	if (hasSymbols) {
		characters += symbols;
	}

	if (characters === "") {
		throw new Error(
			"Invalid options: At least one of numbers, letters or symbols must be enabled.",
		);
	}

	let password = "";
	for (let i = 0; i < length; i++) {
		const charIndex = crypto.randomInt(0, characters.length);
		password += characters[charIndex];
	}

	return password;
};

const args = process.argv.slice(2);
let length = 16;
let hasNumbers = true;
let hasLetters = true;
let hasSymbols = true;

args.forEach((arg) => {
	if (arg.startsWith("--length=")) {
		length = parseInt(arg.split("=")[1], 10);
	} else if (arg === "--no-numbers") {
		hasNumbers = false;
	} else if (arg === "--no-letters") {
		hasLetters = false;
	} else if (arg === "--no-symbols") {
		hasSymbols = false;
	}
});

try {
	const password = generatePassword(length, hasNumbers, hasSymbols, hasLetters);
	console.log(`Password generated:`);
	console.log(``);
	console.log(`${password}`);
	console.log(``);
	console.log(`Copy this and save it somewhere safe!`);
} catch (error) {
	console.error(error.message);
	process.exit(1);
}
