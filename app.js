const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { userProfile } = require('./db');

app.post('/user-save', async (req, res) => {
    try {
        await userProfile.create({ 
            username: req.body.userName, 
            password: req.body.passWord 
        });
        res.json({ message: 'User saved successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while saving user' });
    }
});

app.listen(5000, () => {
    console.log('Start server on port 3000');
});
