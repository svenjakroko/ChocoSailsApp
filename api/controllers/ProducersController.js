module.exports = {

    producers: async function (req, res) {
        const allProducers = await Producer.find()
        res.send(allProducers)
    },

    addProducer: async function (req, res) {
        var newProducer = await Producer.create(
            {
                name: req.body.name,
                year: req.body.year,
                country: req.body.country,
                description: req.body.description,
                logo: req.body.logo
            }).fetch();

        return res.redirect('/producerslist');
    },

    findProducer: async function (req, res) {
        const producerId = req.param('producerId');
        var producer = await Producer.find({ id: producerId });
        return res.view('pages/producerdetails', { _producer: producer });
    },

    editProducer: async function (req, res) {
        const producerId = req.param('producerId');
        var producer = await Producer.find({ id: producerId });
        return res.view('pages/editproducer', { _producer: producer });
    },

    deleteProducer: async function (req, res) {
        const producerId = req.param('producerId')
        var _producer = await Producer.find({ id: producerId });
        var productsOfThisProducer = await Product.find({ producer: _producer[0].name });
        if (productsOfThisProducer.length == 0) {
            var removedProducer = await Producer.destroy({ id: producerId }).fetch();
            return res.send(removedProducer);
        } else {
            console.log("CAN'T REMOVE; THIS PRODUCER HAS SOME PRODUCTS");
            return res.send("");
        }
    },

    updateProducer: async function (req, res) {
        const producerId = req.param('producerId');
        await Producer.update({ id: producerId }).set({
            name: req.body.name,
            year: req.body.year,
            country: req.body.country,
            description: req.body.description,
            logo: req.body.logo
        });
        return res.redirect('/producerslist');
    }

}