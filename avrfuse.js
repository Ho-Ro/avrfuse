// AVR Fuse Calculator, (C) Arne Rossius, http://www.ebps.de.vu/

function setDefault() {
	document.forms[0].reset();
	calc();
}

function calc() {
	var lowval = "0";
	var highval = "0";
	var extval = "0";
	var n = 0;
	while (Element = document.forms[0].elements[n++]) {
		if (Element.type != "checkbox" || Element.checked == true) {
			switch (Element.parentNode.parentNode.id) {
				case "low": lowval += Element.value; break;
				case "high": highval += Element.value; break;
				case "ext": extval += Element.value; break;
			}
		}
	}
	document.getElementById('lowval').innerHTML = evalHex(lowval);
	document.getElementById('highval').innerHTML = evalHex(highval);
	document.getElementById('extval').innerHTML = evalHex(extval);
}

function evalHex(expr) {
	var hex = "00" + eval(expr).toString(16);
	hex = hex.substr(hex.length - 2, 2).toUpperCase();
	return "0x" + hex;
}
