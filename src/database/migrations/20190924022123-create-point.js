module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('points', {
      id: Sequelize.INTEGER,
      time_in: Sequelize.DATE,
      time_out: Sequelize.DATE,
      time_pause: Sequelize.DATE,
      time_return: Sequelize.DATE,
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      latitude: Sequelize.INTEGER,
      longitude: Sequelize.INTEGER,
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('points');
  },
};
