interface ISpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ISpecificationDTO);
}

export { ISpecificationsRepository, ISpecificationDTO };
