algorithms.push({"name": "XOR", "enc": XOREncrypt,"dec": XOREncrypt}, "gen": XORGen)
renderAlgorithms()

function XOREncrypt(plain, key) {
	for (i=0; i<Math.max(0, plain.length-key.length); i++) {
		key += key[i]
	}
	let ciphertext = "";
	console.log(key)
	for (i=0; i<plain.length; i++) {
		ciphertext += plain[i].charCodeAt(0) ^ key[i].charCodeAt(0)
	}
}

function XORGen () {
	
}