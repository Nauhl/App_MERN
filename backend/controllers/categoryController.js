const Category = require('../models/Category');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.create = (req, res) => {
    const category = new Category(req.body)       // en caso de validarse bien pero si no pasaria a el if de errores
    category.save((err, data) => {
        if (err){
            return res.status(400).json({
                error: errorHandler(err)
            });
        } 
        res.json({data});
    })
}

                                                  // con este metodo vamos a poder ver todas las categorias que existen
exports.list = (req, res) => {
    Category.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    })
}