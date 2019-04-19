var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/Product_Manager', { useNewUrlParser: true });
mongoose.Promise = global.Promise;


var ProductSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Product title is required!"], minlength: [4, "Title must be a minimum of 4 characters!"]},
    price: {type: Number, required: [true, "Product price is required!"]},
    image: {type: String}
}, {timestamps: true});

mongoose.model("Product", ProductSchema);

module.exports = {
    product : mongoose.model('Product')
}