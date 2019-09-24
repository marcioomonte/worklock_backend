import Sequelize from 'sequelize';
import mongoose from 'mongoose';
import User from '../app/models/User';
import Point from '../app/models/Point';
import databaseConfig from '../config/database';
import File from '../app/models/File';
import Company from '../app/models/Company';

const models = [User, File, Point, Company];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/worklock',
      { useNewUrlParser: true, useFindAndModify: true }
    );
  }
}

export default new Database();
