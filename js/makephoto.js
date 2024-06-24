const realUpload = document.querySelector('.real-upload');
const upload = document.querySelector('.upload');

upload.addEventListener('click', () => realUpload.click());

// document.addEventListener("DOMContentLoaded", function () {
//     const imageInput = document.getElementById('imageInput');
//     const uploadIcon = document.getElementById('uploadIcon');
//     const uploadedImage = document.getElementById('uploadedImage');

//     uploadIcon.addEventListener('click', function () {
//         imageInput.click();
//     });

//     imageInput.addEventListener('change', function (event) {
//         const files = event.target.files;
//         if (files && files[0]) {
//             const formData = new FormData();
//             formData.append('image', files[0]);

//             fetch('/upload', {
//                 method: 'POST',
//                 body: formData
//             })
//                 .then(response => response.text())
//                 .then(data => {
//                     console.log(data);
//                     const reader = new FileReader();
//                     reader.onload = function (e) {
//                         uploadedImage.src = e.target.result;
//                     }
//                     reader.readAsDataURL(files[0]);
//                 })
//                 .catch(error => {
//                     console.error('Error:', error);
//                 });
//         }
//     });
// });
