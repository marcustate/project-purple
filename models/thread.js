module.exports = function(sequelize, DataTypes) {
  const Thread = sequelize.define("Thread", {
    // mirror Thread with "Thread"
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1 - 30]
      }
    }
  });
  return Thread;
};
