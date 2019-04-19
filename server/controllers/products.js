var mongoose= require('mongoose');
var Product = mongoose.model('Product');

module.exports={
    //show all page
    index: function(req, res){
        Product.find({}, function(err, products){
            if(err){
                console.log("Error", err);
            }
            else{
                console.log('test here',products);
                res.json({message:"Success", data: products})
            }
        })
    },

    //show one page
    display: function(req, res){
        let id = req.params.id;
        Product.findOne({_id: id}, function(err, product){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json(product);
            }
        })
    },

    //create a new  product
    newProduct: function(req, res){
        console.log("adding product...");
        Product.create({title: req.body.title, price: req.body.price, image: req.body.image}, function (err, product){
            if(err){
                res.json({message:"Error", error:err});
            }
            else{
                res.json({message:"You added a Product!", added:true});
            }
        })
    },

    //update a product
    editProduct: function(req, res){
        console.log("Editing product...");
        let id = req.params.id;
        Product.findById(id, function(err, product){
            if(err){
                res.json({message:"Error", error:err});
            }
            else{
                if(req.body.title){
                    product.title = req.body.title; 
                }
                if(req.body.price){
                    product.price = req.body.price;
                }
                if(req.body.image){
                    product.image = req.body.image;
                }
            }
            product.save(function(err){
                console.log("updated product!");
                if(err){
                    res.json({message: "Error!", error: err});
                }
                else{
                    res.json({message: "Success!", product: product})
                }
            })
        })
    },
    
    //delete a product
    deleteProduct: function(req, res){
        console.log("deleting...");
        let id = req.params.id;
        Product.remove({_id: id},function(err){
            console.log("Deleted!");
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", removed: true});
            }
        })
    }  

}