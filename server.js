var express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })
var debug = require('debug');

var app = express();
app.use(express.static('./'));

app.post('/file-size', upload.single('fileInput'), function (req, res) {
    var response = req.file.size.toString();
    debug(req.file.size);
    if (response) {
        res.status(200).send(response.toString());
    } else {
        res.sendStatus(404).end();
    }
});

app.listen(3000, function () {
    console.log('Metadata mirsoservice started !');
});

module.exports = app;
