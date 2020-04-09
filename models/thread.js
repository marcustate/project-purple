module.exports = function(sequelize, DataTypes) {
  const Thread = sequelize.define("Thread", {
    // mirror Thread with "Thread"
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1 - 240]
      }
    }
  });
  Thread.associate = models => {
    Thread.belongsTo(models.User, { foreignKey: { allowNull: false } });
  };
  return Thread;
};
