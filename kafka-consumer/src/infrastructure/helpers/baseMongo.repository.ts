import * as mongoose from 'mongoose';
import {FilterQuery, Model, ProjectionType, QueryOptions, UpdateQuery, UpdateWithAggregationPipeline} from 'mongoose';
import {ObjectId} from 'mongodb';

export class BaseMongoRepository<T = any> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  protected static getId(id: ObjectId | string): ObjectId {
    return typeof id === 'string' ? new ObjectId(id) : id;
  }

  async findAll(): Promise<(T & mongoose.Document)[]> {
    return this.model.find({}).lean();
  }

  async find(
    filter: FilterQuery<T>,
    projection: ProjectionType<T> = {},
  ): Promise<(T & mongoose.Document)[]> {
    return this.model.find(filter, projection).lean();
  }

  async findById(id: ObjectId | string): Promise<T & mongoose.Document> {
    const _id: ObjectId = BaseMongoRepository.getId(id);
    return this.model.findById(_id).lean();
  }

  async findOne(
    filter: FilterQuery<T>,
    projection?: ProjectionType<T>,
  ): Promise<(T & mongoose.Document) | null> {
    return this.model.findOne(filter, projection).lean();
  }

  async updateOne(
    filter?: FilterQuery<T>,
    update?: UpdateQuery<T> | UpdateWithAggregationPipeline,
    options?: QueryOptions<T> | null,
  ): Promise<void> {
    await this.model.updateOne(filter, update, options);
  }

  async findAndUpdateOne(
    filter: FilterQuery<T>,
    update: UpdateQuery<T>,
    options?: QueryOptions<T> | null,
  ): Promise<T & mongoose.Document> {
    return this.model.findOneAndUpdate<T>(filter, update, options).lean();
  }

  async insertOne(document: Omit<T, '_id'>): Promise<T & mongoose.Document> {
    return this.model.create(document);
  }

  async deleteOne(filter: FilterQuery<T>): Promise<void> {
    await this.model.deleteOne(filter);
  }

  async deleteById(id: ObjectId | string): Promise<void> {
    const _id: ObjectId = BaseMongoRepository.getId(id);
    await this.model.deleteOne({ _id });
  }
}
