const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Utilise la variable d'environnement MONGO_URI du fichier .env
        const mongoURI = process.env.MONGO_URI;
        
        if (!mongoURI) {
            throw new Error("La variable MONGO_URI est manquante dans .env");
        }

        const conn = await mongoose.connect(mongoURI);
        console.log(`✅ MongoDB Connecté : ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Erreur de connexion : ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
