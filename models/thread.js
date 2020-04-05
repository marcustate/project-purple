module.exports = function(sequelize, DataTypes) {
  const Thread = sequelize.define("Thread", {
    // mirror Thread with "Thread"
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1 - 30]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1 - 240]
      }
    }
  });

  Thread.associate = models => {
    Thread.belongsTo(models.User, { foreignKey: "created_by" });
    Thread.hasMany(models.Message, { foreignKey: "thread_id" });
  };

  return Thread;
};
