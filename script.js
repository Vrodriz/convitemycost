document.getElementById('uploadPhoto').addEventListener('change', function (event) {
    const photoContainer = document.getElementById('photoContainer');
    photoContainer.innerHTML = ""; // Limpa o conteúdo anterior
    const file = event.target.files[0];
    if (file) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.alt = "Foto do convite";
        photoContainer.appendChild(img);
    }
});
