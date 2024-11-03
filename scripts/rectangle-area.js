function calculateRectangleArea() {
  const rhombuslengthInput = document.getElementById("rhombus-length");
  const rhombuslengthText =rhombuslengthInput.value;
  const length = parseFloat(rhombuslengthText)

  const rhombusWidthInput = document.getElementById("rhombus-width");
  const rectanglelelWidthText = rhombusWidthInput.value; 
  const width = parseFloat(rectanglelelWidthText)
  
  const area = length * width;
  const rhombusSpan = document.getElementById("rhombus-area");
  rhombusSpan.innerText = area;
}
