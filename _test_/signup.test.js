const User = require('../db/models/User');

test('DB returns an object', () => {
  User.findAll({}).then(data => expect(typeof data).toBe('object'));
});

test('postgreSQL is populated with users', () => {
  User.findAll({}).then(data => expect(data).toBeTruthy());
});

test('DB should return henry han', () => {
  User.findOne({
    where: {
      id: 0,
    },
  }).then(data => expect(data.name).toBe('henry han'));
});
