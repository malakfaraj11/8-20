const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'ma_super_cle_secrete';

// S'inscrire (Signup)
exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = new User({ email, password });
        await user.save();
        res.status(201).json({ message: "Utilisateur créé avec succès ✅" });
    } catch (error) {
        res.status(400).json({ error: "Erreur lors de l'inscription. L'email est peut-être déjà utilisé." });
    }
};

// Se connecter (Login)
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: "Email ou mot de passe incorrect ❌" });
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: "Connexion réussie ! 🎉", token });
    } catch (error) {
        res.status(500).json({ error: "Erreur serveur lors de la connexion." });
    }
};
