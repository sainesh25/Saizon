
import userRoutes from '../routes/signup.js';
import loginRoutes from '../routes/login.js';

const allRoutes = (app) => {
    app.use(userRoutes);
    app.use(loginRoutes);
    
}

export default allRoutes;