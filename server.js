const express = require('express');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

// Rate limiter to prevent abuse
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});
app.use('/chat', limiter);

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, // Use environment variable for API key
});
const openai = new OpenAIApi(configuration);

app.post('/chat', async (req, res) => {
    const { message } = req.body;

    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }],
        });

        res.json({ reply: response.data.choices[0].message.content });
    } catch (error) {
        console.error('Error communicating with OpenAI:', error); // Log error for server-side debugging
        res.status(500).json({ error: 'Something went wrong, please try again later.' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
