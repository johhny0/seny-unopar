
export interface IService<TEntity, TCreateEntity, TUpdateEntity> {
  create(createCourseDto: TCreateEntity): Promise<TEntity>;

  findAll(): Promise<TEntity[]>;

  findOne(id: string): Promise<TEntity>;

  update(id: string, update: TUpdateEntity): Promise<boolean>;

  remove(id: string): Promise<boolean>;
}
