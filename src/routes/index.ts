import { Router } from 'express';

import { categoriesRoutes } from './category.routes';
import { specificationRoutes } from './spacifications.routes';

const router = Router();

router.use('/specifications', specificationRoutes);
router.use('/categories', categoriesRoutes);

export { router };
