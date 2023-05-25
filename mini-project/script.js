// Function to calculate the area of a square
function hitungLuas() {
    const sisi = parseFloat(document.getElementById("sisi-luas").value);
    const luas = sisi * sisi;
    document.getElementById("output-luas").textContent = luas;
  }
  
  // Function to calculate the perimeter of a square
  function hitungKeliling() {
    const sisi = parseFloat(document.getElementById("sisi-keliling").value);
    const keliling = 4 * sisi;
    document.getElementById("output-keliling").textContent = keliling;
  }
  
  // Event listener for calculating area
  document.getElementById("hitung-luas").addEventListener("click", hitungLuas);
  
  // Event listener for calculating perimeter
  document.getElementById("hitung-keliling").addEventListener("click", hitungKeliling);