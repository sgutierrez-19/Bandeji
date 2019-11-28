module.exports = function(sequelize, DataTypes) {
  var BandMember = sequelize.define(
    'BandMember',
    {
      id: {
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true
      },
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
