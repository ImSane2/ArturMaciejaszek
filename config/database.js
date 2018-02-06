module.exports = {
    // database: 'mongodb://localhost/cvDB',
    // database: 'mongodb://amaciejaszek:nicoleluch@ds223578.mlab.com:23578/amaciejaszek',
    database: process.env.MONGODB_URI,
    secret: 'secret'
}