const axios = require('axios');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { WebhookClient } = require('discord.js');

app.get('/', (req, res) => {
    res.send('cat');
});

const webhookURL = 'https://discord.com/api/webhooks/1348310985315979285/MPpJ4grERXWz300wio1-MUlOs44xa1AS1yOi6oQIj8CtnoO-mhVRLiBmjfQkCAYN2_2s'
const webhookClient = new WebhookClient({ url: webhookURL });

async function sendCatImage() {
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search');
        if (response.data.length > 0) {
            const catImage = response.data[0].url;
            await webhookClient.send({
                embeds: [{ image: { url: catImage } }]
            });
            console.log('Cat image sent!');
        } else {
            console.log('No cat images found.');
        }
    } catch (error) {
        console.error('Error fetching cat image:', error);
    }
}

setInterval(sendCatImage, 5000);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
