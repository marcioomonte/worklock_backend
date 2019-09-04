import Sequelize from 'sequelize';
import User from '../app/models/User';
import Appointment from '../app/models/Appointment';
import databaseConfig from '../config/database';
import File from '../app/models/File';

const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
