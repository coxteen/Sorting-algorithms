const container = document.querySelector(".continut");

// generarea barilor
function generatebars(num = 30) {

    // structura repetitiva for pt a genera barile
	for (let i = 0; i < num; i += 1) {

		// pt a genera valori random intre 10 si 100
		const value = Math.floor(Math.random() * 90) + 10;
		
		// creare element div
		const bar = document.createElement("div");

		// adaugarea clasei "bar" la "div"
		bar.classList.add("bar");

		// stabilire inaltime bara
		bar.style.height = `${value * 3}px`;

		// mutarea barii pe axa Ox
		bar.style.transform = `translateX(${i * 20}px)`;
		
		// creare element label
		const barLabel = document.createElement("label");

		// adaugarea clase "bar_id" la "label"
		barLabel.classList.add("bar_id");

		// Assign value to "label"
		barLabel.innerHTML = value;
		
		// append "Label" la "div"
		bar.appendChild(barLabel);

		// append "div" la "data-container div"
		container.appendChild(bar);
	}
}

// Functia de sortare
async function SelectionSort(delay = 100) {

	let bars = document.querySelectorAll(".bar");

	for (var i = 1; i < bars.length; i += 1) {

        var x = parseInt(bars[i].childNodes[0].innerHTML);
        var p = i - 1;

        while(p >= 0 && parseInt(bars[p].childNodes[0].innerHTML) > x)
        {
            var temp1 = bars[p + 1].style.height;
            var temp2 = bars[p + 1].childNodes[0].innerText;

            bars[p + 1].style.height = bars[p].style.height;
            bars[p].style.height = temp1;
            bars[p + 1].childNodes[0].innerText = bars[p].childNodes[0].innerText;
            bars[p].childNodes[0].innerText = temp2;

            p = p - 1;

            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 100)
            );
        }
	}

	// activarea butonului "Generare vector nou" dupa finalul sortarii
	document.getElementById("Buton1").disabled = false;
	document.getElementById("Buton1").style.backgroundColor = "#6f459e";

	// activarea butonului "Sorteaza" dupa finalul sortarii
	document.getElementById("Buton2").disabled = false;
	document.getElementById("Buton2").style.backgroundColor = "#6f459e";
}

// apelarea functiei "generatebarss"
generatebars();

// functie pt a genera un vector nou
function generate() {
	window.location.reload();
}

// functie pt a dezactiva butoanele
function disable() {
	document.getElementById("Buton1").disabled = true;
	document.getElementById("Buton1").style.backgroundColor = "#d8b6ff";

	document.getElementById("Buton2").disabled = true;
	document.getElementById("Buton2").style.backgroundColor = "#d8b6ff";
}
