algorithms.push({"name": "Rot13", "enc": rot13encrypt, "dec": rot13decrypt})
renderAlgorithms()


let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"] 

function rot13encrypt(plain, key) {
	let cipherText
	for (i=0; i<plain.length; i++) {
		let char = plain[i]
		let index = alphabet.indexOf(char) + key
		if (index > 25) {
			index -= 26
		} else if (index < 0) {
			index += 26
		}
		cipherText += alphabet[index]
	}
	return cipherText
}

function rot13decrypt(cipher, key) {
	return rot13encrypt(cipher, -key)
}