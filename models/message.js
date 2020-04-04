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
  return Message;
};
