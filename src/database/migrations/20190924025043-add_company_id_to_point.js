module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('points', 'company_id', {
      type: Sequelize.INTEGER,
      references: { model: 'companies', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('points', 'company_id');
  },
};
