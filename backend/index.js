require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Connexion à la base de données
connectDB();

// Middlewares
app.use(cors()); // Pour autoriser les requêtes du frontend
app.use(express.json()); // Pour lire le JSON envoyé dans les requêtes

// Routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({ message: "Backend MVC opérationnel ! 🚀" });
});

app.listen(port, () => {
  console.log(`🚀 Serveur MVC sur http://localhost:${port}`);
});
