module.exports = async function (req, res) {
    const allProducts = await Product.find().sort('producer ASC');
    res.view('pages/homepage', { allProducts });
}