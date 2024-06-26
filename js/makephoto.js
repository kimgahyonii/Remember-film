

function getImageFiles(e) {
    const files = e.currentTarget.files;
    console.log(typeof files, files);

    if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const img = document.createElement('img');
            img.src = event.target.result;
            const imagePreview = document.getElementById('imagePreview');
            imagePreview.innerHTML = ''; // Clear previous images
            imagePreview.appendChild(img);
        };
        reader.readAsDataURL(files[0]);
    }
}

const realUpload = document.querySelector('.real-upload');
const upload = document.querySelector('.upload');

upload.addEventListener('click', () => realUpload.click());
realUpload.addEventListener('change', getImageFiles);

