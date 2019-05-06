algorithms.push({"Name": "XOR", "Enc": XOREncrypt,"Dec": XOREncrypt})

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