let algorithms = []

function encClick() {
	let algo = $("input#algoritmer:checked").val()
	$("#cipherArea").val(algorithms[algo].Enc($("#plainArea").val(), $("#key").val()))
}

function decClick() {
	let algo = $("input#algoritmer:checked").val()
	$("#plainArea").val(algorithms[algo].Dec($("#cipherArea").val(), $("#key").val()))
}