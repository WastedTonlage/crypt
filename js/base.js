let algorithms = []

function encClick() {
	let algo = $("input.algoritmer:checked").val()
	console.log(algo)
	$("#Text2").val(algorithms[algo].enc($("#Text1").val(), $("#t4").val()))
}

function decClick() {
	let algo = $("input.algoritmer:checked").val()
	$("#Text1").val(algorithms[algo].dec($("#Text2").val(), $("#t4").val()))
}



function renderAlgorithms() {
	console.log("rendering")
	nav = $("#menu")
	console.log(nav)
	nav.empty()
	console.log(nav.empty)
	for (i=0; i<algorithms.length;i++) {
		nav.append('<input type="radio" name="algorithms" class="algoritmer" value="' + i + '">' + algorithms[i].name + '<br>')
	}
}

function bitsToASCII(bitArray) {
	let returnString = ""
	for (i=0; i<bitArray.length; i += 8) {
		let letter = bitArray.slice(i, i+8)
		let letterNum = 0
		let cc = 128
		for (i=0;i<letter.length;i++) {
			if (letter[i]) {
				letterNum += cc
			}
			cc /= 2
		}
		returnString += String.fromCharCode(letterNum)
	}
	return returnString
}