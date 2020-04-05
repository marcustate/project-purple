module.exports = function(sequelize, DataTypes) {
  const Thread = sequelize.define("threads", {
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
    Thread.belongsTo(models.user, { foreignKey: "created_by" });
    Thread.hasMany(models.messages, { foreignKey: "thread_id" });
  };
  return Thread;
};
