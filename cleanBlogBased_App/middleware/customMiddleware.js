// This is a custom middleware

module.exports = (req, res, next) => {
    console.log('Custom middleware called');
    next();
};