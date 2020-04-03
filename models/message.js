module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define("Message", {
    // mirror Message with "Message"
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Message;
};
