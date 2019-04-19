var products= require('../controllers/products');
var path = require('path');

module.exports= function(app){

        app.get('/products', function(req, res){
            products.index(req, res);
        })
        //show product : read
        app.get('/products/:id', function(req, res){
            products.display(req, res);
        })
        //new product: create
       app.post('/products/new', function(req, res){
           products.newProduct(req, res);
       })
       //edit product: update
       app.put('/products/edit/:id', function(req, res){
           products.editProduct(req, res);
       })
       //delete product: delete
       app.delete('/products/delete/:id',function(req, res){
           products.deleteProduct(req, res);
       })
    
        app.all("*", (req, res, next) => {
            res.sendFile(path.resolve("./public/dist/public/index.html"))
        });
    }