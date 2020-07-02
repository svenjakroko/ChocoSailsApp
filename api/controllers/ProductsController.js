module.exports = {

    products: async function (req, res) {
        const allProducts = await Product.find()
        res.send(allProducts)
    },

    addProduct: async function (req, res) {
        var newProduct = await Product.create(
            {
                name: req.body.name,
                price: req.body.price,
                percentage: req.body.percentage,
                producer: req.body.producer,
                type: req.body.type,
                weight: req.body.weight
            }).fetch();

        return res.redirect('/');
    },

    findProduct: async function (req, res) {
        const productId = req.param('productId')
        var product = await Product.find({ id: productId });
        return res.view('pages/productdetails', { _product: product });
    },

    editProduct: async function (req, res) {
        const productId = req.param('productId')
        var product = await Product.find({ id: productId });
        const allProducers = await Producer.find()
        return res.view('pages/editproduct', { _product: product, _allProducers: allProducers });
    },

    deleteProduct: async function (req, res) {
        const productId = req.param('productId')
        var removedProduct = await Product.destroy({ id: productId }).fetch();
        return res.send(removedProduct);
    },

    updateProduct: async function (req, res) {
        const productId = req.param('productId');
        await Product.update({ id: productId }).set({
            name: req.body.name,
            price: req.body.price,
            percentage: req.body.percentage,
            producer: req.body.producer,
            type: req.body.type,
            weight: req.body.weight
        });
        return res.redirect('/');
    }


}