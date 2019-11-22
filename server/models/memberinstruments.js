module.exports = function (sequelize, DataTypes) {
    var MemberInstrument = sequelize.define("MemberInstrument", {
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
    return MemberInstrument;
  };
  
  