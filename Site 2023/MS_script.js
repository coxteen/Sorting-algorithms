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

	var min_idx = 0;
	for (var i = 0; i < bars.length; i += 1) {

		min_idx = i;

		// adaugarea culorii dark blue la bara cu indicele i
		bars[i].style.backgroundColor = "#0039f5";

		for (var j = i + 1; j < bars.length; j += 1) {

			// adaugarea culorii rosii la bara cu indicele j
			bars[j].style.backgroundColor = "red";
				
			await new Promise((resolve) =>
				setTimeout(() => {
				resolve();
				}, 100)
			);

			// stocarea valorii barii cu indicele j la variabila val1
			var val1 = parseInt(bars[j].childNodes[0].innerHTML);

			// stocarea valorii variabilei min_ind la val2
			var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
				
			// compararea valorilor
			if (val1 < val2) {
				if (min_idx !== i) {

				// adaugarea culorii lime la bara cu valoarea minima
				bars[min_idx].style.backgroundColor = "#00ffff";
				}
				min_idx = j;

			} 
			else {
				bars[j].style.backgroundColor = "#00ffff";
			}
		}

		// schimbarea barilor i cu min_idx
		var temp1 = bars[min_idx].style.height;
		var temp2 = bars[min_idx].childNodes[0].innerText;

		bars[min_idx].style.height = bars[i].style.height;
		bars[i].style.height = temp1;
		bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
		bars[i].childNodes[0].innerText = temp2;
		
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 100)
		);

		bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

		bars[i].style.backgroundColor = " rgb(49, 226, 13)";
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
