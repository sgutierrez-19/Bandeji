module.exports = function (sequelize, DataTypes) {
  var BandMember = sequelize.define("BandMember", {
    createdAt: {
      allowNull: true,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  }, {
    freezeTableName: true
  });

  BandMember.associate = function (models) {
    BandMember.belongsTo(models.Instrument);
  }


  return BandMember;
};

