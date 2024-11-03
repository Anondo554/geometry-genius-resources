function calculateEllipseArea() {
    const ellipseInput = document.getElementById("ellipse-major-radius"); 
    
    const ellipseText = ellipseInput.value;
    const major = parseFloat(ellipseText);   

    const ellipseHeightInput = document.getElementById("ellipse-minor-radius");
    const  ellipseHeightText =  ellipseHeightInput.value;
    const minor = parseFloat(ellipseHeightText);

    const area = Math.PI * major * minor;
    const ellipseAreaSpan = document.getElementById("ellipse-area");
    ellipseAreaSpan.innerText = area; 
  }
  