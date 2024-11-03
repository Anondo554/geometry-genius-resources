function calculateRectangleArea() {
  const rectanglelelengthInput = document.getElementById("rectangle-length");
  const rectanglelelengthText = rectanglelelengthInput.value;
  const length = parseFloat(rectanglelelengthText)

  const rectangleWidthInput = document.getElementById("rectangle-width");
  const rectanglelelWidthText = rectangleWidthInput.value; 
  const width = parseFloat(rectanglelelWidthText)
  
  const area = length * width;
  const rectangleSpan = document.getElementById("rectangle-area");
  rectangleSpan.innerText = area;
}
