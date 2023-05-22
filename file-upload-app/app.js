const express = require('express');
const multer = require('multer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

let users = [];
let files = [];

app.post('/users/signup', async (req, res) => {
    // TODO: Validate request body
    let { username, password } = req.body;
    password = await bcrypt.hash(password, 10);
    users.push({ username, password });
    res.sendStatus(201);
});

app.post('/users/signin', async (req, res) => {
    // TODO: Validate request body and check if user exists
    let { username, password } = req.body;
    let user = users.find(user => user.username === username);
    if (user && await bcrypt.compare(password, user.password)) {
        let token = jwt.sign({ username }, 'your-secret-key');
        res.json({ token });
    } else {
        res.sendStatus(401);
    }
});

let upload = multer({ dest: 'uploads/' });

app.post('/files/upload', upload.single('file'), (req, res) => {
    // TODO: Generate a unique download link
    let file = req.file;
    file.downloadLink = `/files/download/${file.filename}`;
    files.push(file);
    res.json({ downloadLink: file.downloadLink });
});

app.get('/files/list', (req, res) => {
    res.json(files);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
