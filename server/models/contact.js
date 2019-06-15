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
    Contact.hasMany(models.Sms, {
      foreignKey: 'contactId',
      onDelete: 'CASCADE',
      hooks: true,
    });
  };
  return Contact;
};
