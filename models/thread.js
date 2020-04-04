module.exports = function(sequelize, DataTypes) {
  const Thread = sequelize.define("Thread", {
    // mirror Thread with "Thread"
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1 - 30]
<<<<<<< HEAD
=======
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1 - 240]
>>>>>>> e9d2fb323c9165a9b7366a93a1ea2d7ffd5ef7b4
      }
    }
  });
  return Thread;
};
