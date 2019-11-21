module.exports = function (sequelize, DataTypes) {
  var GroupMember = sequelize.define("GroupMember", {
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

  GroupMember.associate = function (models) {
    GroupMember.belongsTo(models.Instrument);
  }


  return GroupMember;
};

