import fetch from "isomorphic-fetch"

const prompts = {
    caption: "Write an caption for:",
    blog: "Write blog on:",
    email: "Write an email for:",
    greeting: "Write creative and personalized greetings for:",
    heading: "Create an Eye-Catching Headline for:",
    script: "Write an youtube script on:"
};

const apiKey = process.env.API_KEY

export default async function handler (req, res) {
    const { input, type } = JSON.parse(req.body);

    if (input && type && prompts[type]) {
        try {
            const response = await fetch('https://api.openai.com/v1/completions',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`,
                    },
                    body: JSON.stringify({
                        "model": "text-davinci-003",
                        "prompt": `${prompts[type]} ${input}`,
                        "max_tokens": 256, 
                    }),
                }
            );

            const data = await response.json();

            res.send(JSON.stringify({
                output: data.choices[0].text
            }))
        } catch (error) {
            console.error("Error: OpenAI is drunk!")

            res.send(JSON.stringify({
                error: "Error: OpenAI is drunk!"
            }))
        }
    } else {
        res.send(JSON.stringify({
            error: "Error: Not supported!"
        }))
    }
}


