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
    },
  }, {});
  return Sms;
};
