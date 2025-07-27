const { Blague } = require('../models');

exports.ajouterBlague = async (req, res) => {
  try {
    const { contenu } = req.body;
    
    if (!contenu) {
      return res.status(400).json({
        success: false,
        error: 'Le contenu est obligatoire'
      });
    }
    
    const blague = await Blague.create({ contenu });
    
    res.status(201).json({
      success: true,
      data: blague
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

exports.obtenirToutesBlagues = async (req, res) => {
  try {
    const blagues = await Blague.findAll({
      order: [['id', 'DESC']]
    });
    
    res.json({
      success: true,
      data: blagues
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

exports.obtenirBlague = async (req, res) => {
  try {
    const blague = await Blague.findByPk(req.params.id);
    
    if (!blague) {
      return res.status(404).json({
        success: false,
        message: 'Blague non trouvée'
      });
    }
    
    res.json({
      success: true,
      data: blague
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

exports.obtenirBlagueAleatoire = async (req, res) => {
  try {
    const count = await Blague.count();
    
    if (count === 0) {
      return res.status(404).json({
        success: false,
        message: 'Aucune blague disponible'
      });
    }
    
    const random = Math.floor(Math.random() * count);
    const blague = await Blague.findOne({ offset: random });
    
    res.json({
      success: true,
      data: blague
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};