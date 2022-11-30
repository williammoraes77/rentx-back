import { Router } from 'express';

import { categoriesRoutes } from './category.routes';
import { specificationsRoutes } from './spacification.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/specifications', specificationsRoutes);
router.use('/categories', categoriesRoutes);
router.use('/users', usersRoutes);

export { router };
