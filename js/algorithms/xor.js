algorithms.push({"name": "XOR", "enc": XOREncrypt,"dec": XOREncrypt})
renderAlgorithms()

function XOREncrypt(plain, key) {
	for (i=0; i<Math.min(0, plain.length-key.length); i++) {
		key += key[i]
	}
	let ciphertext = "";
	for (i=0; i<plain.length; i++) {
		ciphertext += plain[i].charCodeAt(0) ^ key[i].charCodeAt(0)
	}
	return ciphertext
}