algorithms.push({"name": "Rot13", "enc": rot13encrypt, "dec": rot13decrypt, "gen": rot13gen})
renderAlgorithms()


let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 

function rot13encrypt(plain, key) {
	console.log("plain: " + plain)
	console.log("key: " + key)
	let cipherText = ""
	for (i=0; i<plain.length; i++) {
		let char = plain[i]
		let index = alphabet.indexOf(char) + +key
		console.log("original index: " + index)
		if (index === -1 + +key) {
			cipherText += char
		} else {

			if (index > 25) {
				index -= 26
			} else if (index < 0) {
				index += 26
			}
			console.log("modified index: " + index)
			cipherText += alphabet[index]	
		}
	}
	return cipherText
}

function rot13decrypt(cipher, key) {
	return rot13encrypt(cipher, -key)
}

function rot13gen() {
	return Math.ceil(Math.random * 26)
}