import { Specification } from '../model/Specification';

interface ISpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ISpecificationDTO);
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ISpecificationDTO };
