import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ImportcategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req;
    const importCategoryUseCase = container.resolve(ImportcategoryUseCase);
    await importCategoryUseCase.execute(file);

    return res.status(201).send();
  }
}
export { ImportCategoryController };
