exports.dalle = async (req, res) => {
    try {
        const url = 'https://api.openai.com/v1/images/generations';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.APIKEY}`,
            },
            body: JSON.stringify({
                prompt: "A cute baby sea otter",
                n: 2,
                size: "1024x1024"
            })
        });
        const resposta = await response.json();
        res.status(200).json({ message: resposta.data }) //aqui está o seu array com as urls das imagens
    } catch (error) {
        res.status(500).json({
            message: error
        });
    };
};