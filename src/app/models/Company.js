import Sequelize, { Model } from 'sequelize';
import User from './User';

class Company extends Model {
  static init(sequelize) {
    super.init(
      {
        credential: Sequelize.INTEGER,
        name: Sequelize.STRING,
        address: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Company;
