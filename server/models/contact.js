'use strict';

module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Contact.associate = (models) => {
    // associations can be defined here
  };
  return Contact;
};
