algorithms.push({"name": "XOR", "enc": XOREncrypt,"dec": XOREncrypt, "gen": XORGen})
renderAlgorithms()

function XOREncrypt(plain, key) {
	for (i=0; i<Math.max(0, plain.length-key.length); i++) {
		key.push(key[i])
	}
	let ciphertext = [];
	for (i=0; i<plain.length; i++) {
		ciphertext.push(!!(plain[i] ^ key[i]))
	}
	return ciphertext
}

function XORGen () {
	
}