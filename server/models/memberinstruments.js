module.exports = function(sequelize, DataTypes) {
  var MemberInstrument = sequelize.define(
    'MemberInstrument',
    {
      // code added during deletion of instrument table in DB
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

  // code added after delection of instrument table in DB
  MemberInstrument.associate = function(models) {
    MemberInstrument.belongsTo(models.Member);
  };
  return MemberInstrument;
};
