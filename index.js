const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const data = req.body;
    console.log('Received webhook data:', data);
    // Xử lý dữ liệu ở đây

    res.status(200).json({
        message: 'Webhook received',
        receivedData: data
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
