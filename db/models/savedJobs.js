const Sequelize = require('sequelize');
const db = require('../db.js');
const User = require('./User.js');

const SavedJobs = db.define('SavedJobs', {
  status: {
    type: Sequelize.INTEGER,
  },
  contact_name: {
    type: Sequelize.STRING,
  },
  position: {
    type: Sequelize.STRING,
  },
  applied_date: {
    type: Sequelize.DATE,
  },
  notes: {
    type: Sequelize.TEXT,
  },
});

SavedJobs.belongsTo(User, {
  as: 'user',
  foreignKey: 'job_id',
  constraints: false,
});

User.hasMany(SavedJobs, { foreignKey: 'job_id', constraints: false });

SavedJobs.sync();

module.exports = SavedJobs;
