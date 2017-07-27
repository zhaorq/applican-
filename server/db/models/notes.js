const Sequelize = require('sequelize');
const db = require('../db.js');
const SavedJobs = require('./savedJobs.js');
const User = require('./User.js');

const Notes = db.define('Notes', {
  Start: {
    type: Sequelize.STRING(200),
  },
  Application: {
    type: Sequelize.STRING(200),
  },
  Submit: {
    type: Sequelize.STRING(200),
  },
  Interview: {
    type: Sequelize.STRING(200),
  },
  Offer: {
    type: Sequelize.STRING(200),
  },
});

Notes.belongsTo(SavedJobs, {
  as: 'Notes',
  foreignKey: 'job_id',
  constraints: false,
});

SavedJobs.hasMany(Notes, {
  foreignKey: 'job_id',
  constraints: false,
});

Notes.belongsTo(User, {
  as: 'user',
  foreignKey: 'user_id',
  constraints: false,
});

User.hasMany(Notes, { foreignKey: 'user_id', constraints: false });

Notes.sync();

module.exports = Notes;
