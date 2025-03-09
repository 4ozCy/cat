const axios = require('axios');
const { WebhookClient } = require('discord.js');

const webhookURL = 'https://discord.com/api/webhooks/13483109853159792>
const webhookClient = new WebhookClient({ url: webhookURL });

async function sendCatImage() {
    try {
        const response = await axios.get('https://api.thecatapi.com/v1>
        if (response.data.length > 0) {
            const catImage = response.data[0].url; // Extract the imag>
            await webhookClient.send({
                embeds: [{ image: { url: catImage } }] // Embed with o>
            });
            console.log('Cat image sent!');
        } else {
            console.log('No cat images found.');
        }
    } catch (error) {
        console.error('Error fetching cat image:', error);
    }
}

// Send a cat image every 5 seconds
setInterval(sendCatImage, 5000);
