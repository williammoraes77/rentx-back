import { Router } from 'express';

import { categoriesRoutes } from './category.routes';
import { specificationsRoutes } from './spacification.routes';
import { usersRoutes } from './users.routes';
import { authenticateRoutes } from './authenticate.routes';

const router = Router();

router.use('/specifications', specificationsRoutes);
router.use('/categories', categoriesRoutes);
router.use('/users', usersRoutes);
router.use(authenticateRoutes);

export { router };
