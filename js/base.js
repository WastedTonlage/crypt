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

function ASCIIToBits(ASCIIString) {
	let bits = []
	for (i=0; i<ASCIIString.length; i++) {
		let charCode = ASCIIString[i].charCodeAt()
		let cc = 128
		for (p=0; p<8; p++) {
			if (charCode > cc) {
				charCode -= cc
				bits.push(true)
			} else  {
				bits.push(false)
			}
			cc /= 2
		}
	}
	return bits
}
function Arraytobinary(TandF){
    let Num = ""
    for(i = 0;i < TandF.length;i++){
        let bool = TandF[i]
        if (bool == true) {
            Num += "1"
        } else {
            Num += "0"
        }
    }
    
    return Num
}
function BinarytoArray(FadnF){
    let num = []
    for(i = 0;i < FadnF.length;i++){
        let bool = FadnF[i]
        if (bool == 1)
            num.push(true)
        else{
            num.push(false)
        }
    }
    return num
}
function Binarytonumber(Numberb){
    
}