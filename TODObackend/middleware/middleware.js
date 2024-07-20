const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const key = process.env.SECRET_KEY;

async function tokenMiddleware(req, res, next) {
    let token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
        return res.status(401).json({
            message: "Please Login"
        });
    }

    token = token.split(" ")[1];

    if (!key) {
        throw new Error("Provide Key");
    }

    try {
        const verify = jwt.verify(token, key);
        console.log(verify);

        if (!verify) {
            return res.status(401).json({
                message: "Please Login"
            });
        }

        // Assuming req.userId would be used elsewhere in the code
        res.locals.userId = verify.id;

        next();
    } catch (err) {
        return res.status(401).json({
            message: "Please Login"
        });
    }
}

module.exports = {tokenMiddleware};
