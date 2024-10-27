import jsonwebtoken from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if(!token){
        res.json({
            status: 401,
            message: 'Please Login'
        });
        return;
    }

    const verifyToken = jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY);
    if(!verifyToken){
        res.json({
            status: 401,
            message: 'Invalid Token, Please Login again',
        });
        return;
    }
    next();
}

export default authMiddleware;