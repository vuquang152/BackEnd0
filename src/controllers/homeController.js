
const getHomepage = (req, res) => {
    res.send('Hello World!');
}

const getABC = (req, res) => {
    res.send('check abc')
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

module.exports = { 
    getHomepage,
    getABC,
    getHoiDanIT,
};