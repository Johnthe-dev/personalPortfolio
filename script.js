//shuffles words using Fisher–Yates-Durstenfeild shuffle
function shuffle(paragraph) {
	let wordsArray = paragraph.split(" ");
	for(let i = 0; i < wordsArray.length - 1; i++) {
		let j = i + Math.floor(Math.random() * (wordsArray.length - i));
		let temp = wordsArray[j];
		wordsArray[j] = wordsArray[i];
		wordsArray[i] = temp;
	}
	paragraph = wordsArray.join(" ");
	return paragraph;
}

//shuffles individual characters in each word using Fisher–Yates-Durstenfeild shuffle
function anagram(paragraph) {
	let wordsArray = paragraph.split(" ");
	wordsArray.forEach(function(word, index, array) {
		let lastChar = "";
		let wordArray = word.split("");
		let letterNumber = /^[0-9a-z]+$/i;
		if(wordArray[wordArray.length - 1].match(letterNumber) === null || 1===0) {
			lastChar = wordArray.pop();
		}
		for(let i = 0; i < wordArray.length - 1; i++) {
			let j = i + Math.floor(Math.random() * (wordArray.length - i));
			let temp = wordArray[j];
			wordArray[j] = wordArray[i];
			wordArray[i] = temp;
		}
		array[index] = wordArray.join("") + lastChar;
	});
	paragraph = wordsArray.join(" ");
	return paragraph
}

//"Encrypts" the paragraph by rotating the letters thirteen positions eg a->n, b->o, ...
function rotThirteen(paragraph) {
	let characters = paragraph.split("");
	characters.forEach(function(character, index, table) {
		let laterLetters = /^[n-z]+$/i;
		let earlyLetters = /^[a-m]+$/i;
		let letterNumber = /^[a-z]+$/i;
		if(character.match(letterNumber) !== null) {
			if(character.match(laterLetters) !== null) {
				let code = character.charCodeAt(0);
				table[index] = String.fromCharCode(code - 13);
			} else if(character.match(earlyLetters) !== null) {
				let code = character.charCodeAt(0);
				table[index] = String.fromCharCode(code + 13);
			}
		}
	});
	paragraph = characters.join("");
	return paragraph;
}

//finds a string in a paragraph and replaces it with a new string
function findReplace(paragraph) {
	let searchFor = document.getElementById("find").value;
	let replaceWith = document.getElementById("replace").value;
	if (searchFor === "" || replaceWith === "") {
		throw ("You need to enter values for find and replace.");
	}
	let position = paragraph.search(searchFor);
	paragraph = paragraph.slice(0, position) + replaceWith + paragraph.slice(position + searchFor.length);
	return paragraph;
}

function findReplaceAll(paragraph) {
	let searchFor = document.getElementById("find").value;
	let replaceWith = document.getElementById("replace").value
	if (searchFor === "" || replaceWith === "") {
		throw ("You need to enter values for find and replace.");
	}
	while(paragraph.search(searchFor) !== -1) {
		let position = paragraph.search(searchFor);
		paragraph = paragraph.slice(0, position) + replaceWith + paragraph.slice(position + searchFor.length);
	}
	return paragraph;
}