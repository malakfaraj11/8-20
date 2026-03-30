require('dotenv').config(); // Charge le fichier .env
const express = require('express');
const connectDB = require('./db');
const app = express();
const port = process.env.PORT || 3000;

// Connexion à la base de données
connectDB();

// Une route simple pour vérifier si tout fonctionne
app.get('/', (req, res) => {
  res.json({
    message: "Bienvenue sur ton backend Node.js avec .env ! 🔐",
    status: "success",
    version: "1.4.0"
  });
});

// Lancement du serveur en utilisant la variable PORT
app.listen(port, () => {
  console.log(`🚀 Le serveur tourne sur http://localhost:${port}`);
});
