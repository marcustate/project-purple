module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define("messages", {
    // mirror Message with "Message"
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1 - 240]
      }
    }
  });
  Message.associate = models => {
    Message.belongsTo(models.threads, { foreignKey: "thread_id" });
    Message.belongsTo(models.user, { foreignKey: "author_id" });
  };
  return Message;
};
