import jwt from 'jsonwebtoken';
const JWT_SECRET = '@amit123'

const createToken = (email)=>{
    return jwt.sign({email},JWT_SECRET , {expiresIn:'1h'})
}

const verifyToken = async (req, res, next) => {

    const token = req.cookies.token;
    // console.log("shivam", token);
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

export {verifyToken , createToken}