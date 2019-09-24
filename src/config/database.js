module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  // username: 'tenanty',
  // password: 'sfkjKGIYG*&$DKJHJKHL',
  password: 'postgres',
  database: 'worklock',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
