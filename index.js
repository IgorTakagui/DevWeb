const express = require('express');
const mongoose = require('mongoose');
const produtoRoutes = require('./routes/produtoRoutes');
const app = express();

app.use(express.json());
app.use('/produto', produtoRoutes);

mongoose.connect(
    `mongodb+srv://HisgorMusical:takagui10@cluster0.aiedxys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

)
  .then(() => {
    const port = process.env.PORT || 4000;
    console.log('Conectado ao MongoDB Atlas!');
    app.listen(port, () => {
        console.log(`Escutando na porta ${port}`);
    });
  })
  .catch((err) => console.log(err));
