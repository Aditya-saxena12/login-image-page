const inputImage = document.getElementById("firm-image");

inputImage.addEventListener("change", function (e) {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function () {
    const img = new Image();
    img.src = reader.result;
    document.body.appendChild(img);
  };

  reader.readAsDataURL(file);
});
