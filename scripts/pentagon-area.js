function calculatePentagonArea() {
    const  pentagonPariInput = document.getElementById("pentagon-perimeter");
    const pentagonPeriText =  pentagonPariInput.value;
    const pari = parseFloat(pentagonPeriText); 
  
    const  pentagonHeightInput = document.getElementById("pentagon-apothem");
    const  pentagonHeightText =  pentagonHeightInput.value;
    const apo = parseFloat( pentagonHeightText);
    const area = 0.5 * pari * apo;
    const  pentagonAreaSpan = document.getElementById("pentagon-area");
    pentagonAreaSpan.innerText = area; 
  }
  