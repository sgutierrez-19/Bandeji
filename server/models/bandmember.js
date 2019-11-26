module.exports = function(sequelize, DataTypes) {
  var BandMember = sequelize.define(
    'BandMember',
    {
      instrument: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: true,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE
      }
    },
    {
      freezeTableName: true
    }
  );

  // code present before deletion of instrument table in DB
  // BandMember.associate = function (models) {
  //   BandMember.belongsTo(models.Instrument);
  // }

  return BandMember;
};
