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
function BinnarytoArray(FadnF){
    let num = ""
    for(i = 0;i < FadnF.length;i++){
        let bool = FadnF[i]
        if (bool = 1)
            num += "true"
        else{
            num += "false"
        }
    }
    
}