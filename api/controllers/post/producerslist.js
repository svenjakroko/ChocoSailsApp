module.exports = async function (req, res) {
    const allProducers = await Producer.find()
    res.view('pages/producerslist', { allProducers });
}