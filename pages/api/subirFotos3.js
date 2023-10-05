//require('./.env.local').config()
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,

});

const images = [
    './api/foto1.jpg',
    './api/foto2.jpg'
];

(async function run() {
    for (const image of images) {
        const result = await cloudinary.uploader.upload(image);
        console.log(result.secure_url)
    }
   
})();


