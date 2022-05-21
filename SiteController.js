const Product = require('../models/Product');

const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {

  // [GET] /home
  index(req, res, next) {

    Product.find({})
      .then((clothesItems) => {
        res.render('home', {
          clothesItems: mutipleMongooseToObject(clothesItems),
        });
      })
      .catch(next);

  }
  
  // [GET] /search
  search(req, res){
    res.send('search'); 
  }

  

}


module.exports = new SiteController()