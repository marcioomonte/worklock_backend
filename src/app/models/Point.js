import Sequelize, { Model } from 'sequelize';
import User from './User';
import Company from './Company';

class Point extends Model {
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        latitude: Sequelize.INTEGER,
        longitude: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.Company, { foreignKey: 'company_id', as: 'company' });
  }
}

export default Point;
