const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, "uploads");
        },
        filename: function (req, file, callback) {
            callback(null, file.originalname + Date.now());
        }
    })
}).single('file');

app.post('/api/fileupload', upload, (req, res) => {
    res.send('File uploaded successfully');
})

app.listen(3000, () => console.log('Server started on port 3000'));