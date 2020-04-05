module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define("Message", {
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
    Message.belongsTo(models.Thread, { foreignKey: "thread_id" });
    Message.belongsTo(models.User, { foreignKey: "author_id" });
  };
  return Message;
};
