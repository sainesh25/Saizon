const userRoutes = require('../routes/signup');
const loginRoutes = require('../routes/login');

const allRoutes = (app) => {
    app.use(userRoutes);
    app.use(loginRoutes);
    
}

module.exports = allRoutes;