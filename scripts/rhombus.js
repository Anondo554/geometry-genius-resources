function calculateRhombusArea() {
    const ellipseInput = document.getElementById("rhombus-perimeter"); 
    
    const ellipseText = ellipseInput.value;
    const base = parseFloat(ellipseText);   

    const ellipseHeightInput = document.getElementById("rhombus-apothem");
    const  ellipseHeightText =  ellipseHeightInput.value;
    const length = parseFloat(ellipseHeightText);

    const area = 0.5 * base * length;
    const ellipseAreaSpan = document.getElementById("rhombus-area");
    ellipseAreaSpan.innerText = area; 
  }
  