const express = require('express');

const app = express()

app.get("/:id", (req,res) => {
    // http://localhost:3000/
    console.log('Hello world')
    res.json({message: "Funcionou"})
})

app.listen(3000, () => {
    console.log('servidor está rodando na porta 3000')
})