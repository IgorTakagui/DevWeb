const express = require('express');
const mongoose = require('mongoose');
const produtoRoutes = require('./routes/produtoRoutes');
const app = express();

app.use(express.json());
app.use('/produto', produtoRoutes);

const DB_USER = 'SEU_USUARIO';
const DB_PASSWORD = 'SUA_SENHA';
const DB_CLUSTER = 'SEU_CLUSTER.mongodb.net';

mongoose.connect(
    `mongodb+srv://HisgorMusical:takagui10@cluster0.aiedxys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

)
  .then(() => {
    console.log('Conectado ao MongoDB Atlas!');
    app.listen(3000);
  })
  .catch((err) => console.log(err));
