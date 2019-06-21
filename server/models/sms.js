'use strict';

export default (sequelize, DataTypes) => {
  const Sms = sequelize.define('Sms', {
    sender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    receiver: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Sms.associate = (models) => {
    Sms.belongsTo(models.Contact, {
      foreignKey: 'smsId',
      onDelete: 'CASCADE',
      hooks: true,
    });
    // associations can be defined here
  };
  return Sms;
};
