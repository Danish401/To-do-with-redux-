const multer = require('multer');
const path = require('path');

// Configure multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Corrected the path
        cb(null, path.join(__dirname, 'pulic/upload'));
    },
    filename: function (req, file, cb) {
        // Use timestamp and original file name
        cb(null, Date.now() + '-' + file.originalname);
    }
});


const upload = multer({ storage: storage });

module.exports = upload; 
