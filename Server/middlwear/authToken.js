import Jwt from "jsonwebtoken";

export const authToken = (req, res, next) => {
    const token = req.cookies.token;
    if (token == undefined) {
        res.status(401).json({ message: 'User not authencated!!'});
    }
    try {
        const decoded = jwt.verify(token, 'secret_key');
        next();
    } catch (error) {
        res.status(400).json({ message: error.message});
    } 
};