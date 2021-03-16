const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token})

        if(!user) throw new Error()

        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.'})
    }

    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDRjZmY3NTcyMDNhNmVkY2Q5MDdiZDEiLCJpYXQiOjE2MTU2NjQxNTd9.iynzn91bALI3uS8GRswzXFbOem2DYsIyCIN_z4ry9jg"
}

module.exports = auth