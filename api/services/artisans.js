const Artisan = require ('../models/artisan');

exports.getAll = async (req, res, next) => {
    
 try {
    const artisan = await Artisan.findAll({
  attributes: { exclude: ['createdAt', 'updatedAt'] }
});
    res.json(artisan);
  } catch (error) {
    console.error('Erreur dans /artisan :', error);
    res.status(500).json({ error: 'Failed to fetch artisan' });
  }
}; 




exports.getByName = async (req, res, next) => {
    
 try {
    const { nom } = req.body.nom;

    const artisan = await Artisan.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      where: {nom: nom},
    });

    if (artisan) {
            return res.status(200).json(artisan);
        }
        return res.status(404).json('user_not_found');
    } catch (error) {
      console.error('Erreur dans /artisan :', error);
      res.status(500).json({ error: 'Failed to fetch artisan' });
    }
}; 


