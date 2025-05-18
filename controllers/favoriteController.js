const Favorite = require('../models/favoriteModel');

exports.saveFavorite = async (req, res) => {
  const { name, imageUrl, type } = req.body;

  console.log('Usuario:', req.user); 
  console.log('Datos recibidos:', { name, imageUrl, type });
  try {
    const fav = await Favorite.create({
      userId: req.user.id,
      name,
      imageUrl,
      type,
    });
    res.status(201).json(fav);
  } catch (err) {
    res.status(400).json({ error: 'No se pudo guardar el favorito' });
  }
};

exports.getFavorites = async (req, res) => {
  try {
    const favs = await Favorite.find({ userId: req.user.id });
    res.json(favs);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener favoritos' });
  }
};
