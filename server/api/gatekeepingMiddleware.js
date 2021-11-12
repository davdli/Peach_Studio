// store all of our functions that will act as middleware between our request and our response

const User = require("../db/models/User");

const requireToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const user = await User.findByToken(token);
        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
}

const requireAdmin = (req, res, next) =>{
    if(!req.user.isAdmin){
        return res.status(403).send('Only Panthers are allowed!');
    }
}

module.exports = {
    requireToken,
    requireAdmin,
}
