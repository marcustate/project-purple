module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
      text: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
      authorId: DataTypes.INTEGER
    }, {});
    Message.associate = function (models) {
      Message.belongsTo(models.Restaurant)
      Message.belongsTo(models.User)
    };
    return Message;
  };