const testRoutes = require('../routes/testRoute');
const userRoutes = require('../routes/signup');

const allRoutes = (app) => {
    app.use(testRoutes);
    app.use(userRoutes);
    
}

module.exports = allRoutes;