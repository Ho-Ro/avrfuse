// AVR Fuse Calculator, (C) Arne Rossius, http://www.ebps.de.vu/
// This work is released under the terms of the GNU General Public License, version 3.

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
	if ( document.getElementById('lowval') )
	    document.getElementById('lowval').innerHTML = evalHex(lowval);
	if ( document.getElementById('highval') )
	    document.getElementById('highval').innerHTML = evalHex(highval);
	if ( document.getElementById('extval') )
	    document.getElementById('extval').innerHTML = evalHex(extval);

	if ( document.getElementById('lfuse') )
	    document.getElementById('lfuse').innerHTML = "-U lfuse:w:" + evalHex(lowval) + ":m";
	if ( document.getElementById('hfuse') )
	    document.getElementById('hfuse').innerHTML = "-U hfuse:w:" + evalHex(highval) + ":m";
	if ( document.getElementById('efuse') )
	    document.getElementById('efuse').innerHTML = "-U efuse:w:" + evalHex(extval) + ":m";
}

function evalHex(expr) {
	var hex = "00" + eval(expr).toString(16);
	hex = hex.substr(hex.length - 2, 2).toUpperCase();
	return "0x" + hex;
}
