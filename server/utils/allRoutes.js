
import userRoutes from '../routes/signup.js';
import loginRoutes from '../routes/login.js';
import productRoutes from '../routes/product.js';

const allRoutes = (app) => {
    app.use(userRoutes);
    app.use(loginRoutes);
    app.use(productRoutes);
}

export default allRoutes;