import express from 'express';
import characters from '../data/characters.js';

const router = express.Router();

router.get('/characters', (req, res) => {
    res.status(200).json(characters);
});

router.get('/characters/name', (req, res) => {
    const { name } = req.query;

    if (!name) {
        return res.status(404).json({ message: "Parâmetro 'name' é obrigatório" });
    }

    const result = characters.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));

    if (result.length === 0) {
        return res.status(404).json({ message: "Personagem não encontrado" });
    }

     res.status(200).json(result);
});

router.get('/characters/:id', (req, res) => {
    const id = req.params.id;
    const character = characters.find(c => c.id == id);

    if (!character) {
        res.status(404).json({message: "Personagem não encontrado"});
        return;
    }

    res.status(200).json(character);
});

export default router;